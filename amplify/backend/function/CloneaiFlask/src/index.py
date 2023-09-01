import json
import os
import awsgi
import boto3
from flask_cors import CORS
from flask import Flask, jsonify, request
import stripe
import botocore 
import botocore.session 
from botocore.exceptions import ClientError
from boto3.dynamodb.types import TypeDeserializer, TypeSerializer
from boto3.dynamodb.conditions import Key, Attr
import requests
from datetime import datetime



client = boto3.client('ses')
clientDynamoDB = boto3.client("dynamodb")
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('CUSTOMERS-dev')
#BODY_HTML = 
CHARSET = "UTF-8"      


def sendToDB_CreateAccount(email,stripeID):
    TABLE = "CUSTOMERS-dev"

    clientDynamoDB.put_item(TableName=TABLE, 
       Item={
        "id": {
            "S": stripeID
        },
        "active": {
            "BOOL": False
        },
        "interactiveBroker": {
            "BOOL": False
        },
        "email": {
            "S": email
        },
        "subscriptionPaid":{
            "BOOL": False
        },
        "subscription": {
            "M": {
            "status": {
                "BOOL": False
            },
            "tier": {
                "N": "1"
            },
            "price": {
                "N": "1"
            }
            }
        }
        }
       )

    
def getUserbyStripeID(stripeID):
    response = table.scan(
    FilterExpression=Attr('stripeID').eq(stripeID),
    )

    print("email \n",response["Items"][0]["id"])

    return response["Items"][0]["id"]

def createStripeAccount(email, stripeID):
        table.update_item(
    Key={
        'id': email,
    },
    UpdateExpression='SET stripeID = :val1 ',
    ExpressionAttributeValues={
        ':val1': stripeID        
    }
)

def updateSubscription(email):
  print("updateSubscription\n", email)
  response = table.update_item(
    Key={
        'id': email,
    },
    UpdateExpression='SET subscriptionPaid = :val1 ',
    ExpressionAttributeValues={
        ':val1': True        
    }
  )
  print("response", response)
  return 200


    
 

def sendEmail(subject,body_information):
    SENDER = "support@cloneai.io"
    RECIPIENT = "support@cloneai.io"
    AWS_REGION = "us-west-2"
    SUBJECT = "Cloneai: New subscriptions actions in Stripe"
    BODY_TEXT = ("This is an automated Message for phase I\r\n"
                )
    try:
    #Provide the contents of the email.
        response = client.send_email(
            Destination={
                'ToAddresses': [
                    RECIPIENT,
                ],
            },
            Message={
                'Body': {
                    'Html': {
                        'Charset': CHARSET,
                        'Data': """<html>
                                <head></head>
                                <body>
                                {}
                                </body>
                                </html> """.format(body_information)  ,
                    },
                    'Text': {
                        'Charset': CHARSET,
                        'Data': BODY_TEXT,
                    },
                },
                'Subject': {
                    'Charset': CHARSET,
                    'Data': subject,
                },
            },
            Source=SENDER,
        )
    # Display an error if something goes wrong.	
    except ClientError as e:
        print(e.response['Error']['Message'])
    else:
        print("Email sent! Message ID:"),
        print(response['MessageId'])


app = Flask(__name__)
CORS(app)

# Constant variable with path prefix
BASE_ROUTE = "/webhook/server"

# FROM WEBHOOK SECRET
endpoint_secret = os.environ.get("endpoint_secret_key")

#FROM STRIPE API KEYS
stripe.api_key = os.environ.get("api_key")




@app.route(BASE_ROUTE, methods=['GET'])
def healthcheck():
    return jsonify(message='Healthcheck OK!')


@app.route('/webhook/server', methods=['POST'])
def webhook():
    event = None
    payload = request.data
    print("payload = request.data\n", payload)

    # payload3 = request.get_data()
    # print("request.body.decode\n", payload3)

    # payload4 = request.data.decode('utf-8')
    # print("request.data.decode\n", payload4)


    #sig_header = request.headers['STRIPE_SIGNATURE']
    #sig_header= 'whsec_iLsfWrat77g9a4SOxyQZpUU22wPXbJpW'
    #print("sig_header\n", sig_header)

    try:
        event = json.loads(payload)
    except:
        print('⚠️  Webhook error while parsing basic request.' + str(e))
        return jsonify(success=False)
    if endpoint_secret:
        # Only verify the event if there is an endpoint secret defined
        # Otherwise use the basic event deserialized with json
        sig_header = request.headers.get('stripe-signature')
        try:
            event = stripe.Webhook.construct_event(
                payload, sig_header, endpoint_secret
            )
        except stripe.error.SignatureVerificationError as e:
            print('⚠️  Webhook signature verification failed.' + str(e))
            return jsonify(success=False)


    customer=""
    subscription=""

    # Handle the event
    if event['type'] == 'customer.created':
      print("Event create account\n")
      customer = event['data']['object']
      sendEmail("customer.created", json.dumps(subscription))

      response=createStripeAccount(email=customer['email'], stripeID=customer['id'])
      print("customer\n", response)
      return response
    
    
    elif event['type'] == 'customer.deleted':
      customer = event['data']['object']
      print("customer deleted\n", customer)
    elif event['type'] == 'customer.updated':
      customer = event['data']['object']
      print("customer updated\n", customer)
    elif event['type'] == 'customer.discount.created':
      discount = event['data']['object']
    elif event['type'] == 'customer.discount.deleted':
      discount = event['data']['object']
    elif event['type'] == 'customer.discount.updated':
      discount = event['data']['object']
    elif event['type'] == 'customer.source.created':
      source = event['data']['object']
    elif event['type'] == 'customer.source.deleted':
      source = event['data']['object']
    elif event['type'] == 'customer.source.expiring':
      source = event['data']['object']
    elif event['type'] == 'customer.source.updated':
      source = event['data']['object']
    elif event['type'] == 'customer.subscription.created':
        print("Event Subscription created\n")

        subscription = event['data']['object']   
        stripeID= subscription["customer"]   
        tier= subscription["items"]["data"][0]["plan"]["id"]
        price= subscription["items"]["data"][0]["plan"]["amount"]

        print(subscription["items"]["data"][0]["plan"]["id"])
        
        email= getUserbyStripeID(stripeID)

        response = updateSubscription(email=email)

        if(response == 200):
          sendEmail("subscription.created", json.dumps(subscription))
        
        return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps("Account Updated")
        }



    elif event['type'] == 'customer.subscription.deleted':
      subscription = event['data']['object']
    elif event['type'] == 'customer.subscription.pending_update_applied':
      subscription = event['data']['object']
    elif event['type'] == 'customer.subscription.pending_update_expired':
      subscription = event['data']['object']
    elif event['type'] == 'customer.subscription.trial_will_end':
      subscription = event['data']['object']
    elif event['type'] == 'customer.subscription.updated':
      subscription = event['data']['object']
    elif event['type'] == 'customer.tax_id.created':
      tax_id = event['data']['object']
    elif event['type'] == 'customer.tax_id.deleted':
      tax_id = event['data']['object']
    elif event['type'] == 'customer.tax_id.updated':
      tax_id = event['data']['object']
    # ... handle other event types
    else:
      print('Unhandled event type {}'.format(event['type']))
    


    return jsonify(success=True)


def handler(event, context):
    return awsgi.response(app, event, context)