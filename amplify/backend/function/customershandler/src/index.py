import json
import os
import awsgi
import boto3
from flask_cors import CORS
from flask import Flask, jsonify, request
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
TABLE = "CUSTOMERS-dev"


def createUser(email,firstname,lastname,AWSsub):

    table.put_item(
   Item={
        'id': email,
        'firstname': firstname,
        'lastname': lastname,
        'AWSsub': AWSsub,
    }
    )

    """
    [{'subscriptionPaid': False, 
    'interactiveBrokerLinked': True, 
    'lastname': 'SEM', 'AUSsub': '397f0f26-b1a1-4b32-a060-abfa9ad47675', 'subscription': {'tier': Decimal('0'), 'price': Decimal('0'), 'status': False}, 'firstname': 'TEST', 'stripeID': '123', 'id': 'sherief.emam85.se@gmail.com', 'interactiveBrokeraccountNumber': 'asdasd'}]
    """

def getUserByEmail(email):
    response = clientDynamoDB.get_item(
        TableName=TABLE,
        Key={'id': {"S": email}})
    return response

def getUserbyStripeID(stripeID):
    response = table.scan(
    FilterExpression=Attr('stripeID').eq(stripeID),
    )

    print("email \n",response["Items"][0]["id"])

    return response["Items"]

def addIBaccountNumber(email, ibAccount):

    table.update_item(
    Key={
        'id': email,
    },
    UpdateExpression='SET interactiveBrokeraccountNumber = :val1, interactiveBrokerLinked = :val2 ',
    ExpressionAttributeValues={
        ':val1': ibAccount,
        ':val2': 'pending'
    }
)

    return jsonify(message="item updated")

def enableIBLink(email,iBStatus):

    table.update_item(
    Key={
        'id': email,
    },
    UpdateExpression='SET interactiveBrokerLinked = :val1 ',
    ExpressionAttributeValues={
        ':val1': iBStatus        
    }
)

    return jsonify(message="item updated")

def from_dynamodb_to_json(item):
    d = TypeDeserializer()
    return {k: d.deserialize(value=v) for k, v in item.items()}


def sendEmail(subject,body_information):
    SENDER = "support@cloneai.io"
    RECIPIENT = "support@cloneai.io"
    AWS_REGION = "us-west-2"
    SUBJECT = "Cloneai: "+ subject
    BODY_TEXT = ("This is an automated Message for phase I\r\n")
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



@app.route('/healthcheck', methods=['GET'])
def healthcheck():
    return jsonify(message='Healthcheck OK!')


@app.route('/customers', methods=['GET'])
def getInfo():
    email = request.args["email"]
    firstname = request.args["firstname"]
    lastname = request.args["lastname"]
    AWSsub = request.args["AWSsub"]

    response = getUserByEmail(email)
    
    if "Item" in response:
        print("Found a record \n")
        Item = from_dynamodb_to_json(response['Item'])
    else:
        print("No records found \n")
        print("Creating new record \n")
        createUser(email,firstname,lastname,AWSsub)
        print("Created new record \n")
        response = getUserByEmail(email)
        Item = from_dynamodb_to_json(response['Item'])
    
        body_information="User with Email: "+ str(email) +" signed In"
        sendEmail(subject="New User signed in to CloneAi",
            body_information=body_information)

    return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps(Item)
    }

@app.route('/customers/all', methods=['GET'])
def getAllInfo():
    
    response = table.scan()
    print(response["Items"])
    #Items = from_dynamodb_to_json(response['Items'])
    

    return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps(response["Items"])
    }




@app.route('/ib/addaccount', methods=['POST'])
def getInfoPOST():
    email = request.args["email"]
    iBAccount = request.args["iBAccount"]
    addIBaccountNumber(email,iBAccount)

    return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps("Account Updated")
    }


@app.route('/ib/connection', methods=['POST'])
def enableIBLinkFunction():
    email = request.args["email"]
    iBStatus = request.args["iBStatus"]
    enableIBLink(email,iBStatus)
    
    

    return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps("Account Updated")
    }



""" @app.route('/ib/connection', methods=['POST'])
def addibAccount():
    email = request.args["email"]
    iBStatus = request.args["iBStatus"]
    enableIBLink(email,iBStatus)

    return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps("Account Updated")
    }

 """


def handler(event, context):
    return awsgi.response(app, event, context)

""" def handler(event, context):
  print('received event:')
  print(event) """
  
"""   return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps('Hello from your new Amplify Python lambda!')
  } """