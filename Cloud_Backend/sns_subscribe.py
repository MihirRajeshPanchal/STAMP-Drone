def sns_subscribe(email):
    import boto3

    # create an SNS client
    sns = boto3.client('sns')

    # set the topic ARN for your SNS topic
    topic_arn = 'arn:aws:sns:ap-northeast-1:109417029150:STAMP'

    # subscribe the email address to the SNS topic
    sns.subscribe(TopicArn=topic_arn, Protocol='email', Endpoint=email)
    
    print(f'Sent message to {email}')