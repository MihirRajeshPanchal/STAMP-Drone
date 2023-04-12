def upload_dynamodb_details():
    import boto3
    import json

    # Create a client for DynamoDB
    dynamodb = boto3.client('dynamodb')

    # Open the JSON file and load its contents as a Python object
    with open('../Face_Recognition/details.json') as f:
        data = json.load(f)

    # Iterate over the objects in the JSON file and add them to DynamoDB
    for item in data:
        response = dynamodb.put_item(
            TableName='STAMP',
            Item={
                'ID': {'S': item['id']},
                'first_name': {'S': item['first_name']},
                'last_name': {'S': item['last_name']},
                'email': {'S': item['email']},
                'image': {'S': item['image']}
            }
        )
        print(response)
