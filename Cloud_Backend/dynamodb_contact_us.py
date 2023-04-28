def add_to_dynamodb_contact_us(name, email, message):
    import boto3
    import uuid
    id = str(uuid.uuid4())
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('STAMP_Contact_Us')
    item = {
        'ID': id,
        'name': name,
        'email': email,
        'message': message
    }
    response = table.put_item(Item=item)
    print(response)
