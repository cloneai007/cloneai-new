export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "cloneai": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "function": {
        "stripeActions": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string",
            "LambdaExecutionRoleArn": "string"
        },
        "CloneaiFlask": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string",
            "LambdaExecutionRoleArn": "string"
        },
        "customershandler": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string",
            "LambdaExecutionRoleArn": "string"
        },
        "cloneaiCustomers": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "storage": {
        "stripedb": {
            "Name": "string",
            "Arn": "string",
            "StreamArn": "string",
            "PartitionKeyName": "string",
            "PartitionKeyType": "string",
            "Region": "string"
        },
        "CUSTOMERS": {
            "Name": "string",
            "Arn": "string",
            "StreamArn": "string",
            "PartitionKeyName": "string",
            "PartitionKeyType": "string",
            "Region": "string"
        },
        "cloneaimedia": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "api": {
        "stripeapi": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        },
        "customers": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        },
        "cloneaiCustomersApi": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}