import boto3

# create an SNS client
sns = boto3.client('sns')

# set the topic ARN for your SNS topic
topic_arn = 'arn:aws:sns:ap-northeast-1:109417029150:STAMP'

# get the list of email addresses subscribed to the SNS topic
response = sns.list_subscriptions_by_topic(TopicArn=topic_arn)
subscription_list = response['Subscriptions']
email_list = [subscription['Endpoint'] for subscription in subscription_list]

# read the email list from S3
bucket_name = 's3stamp'
file_key = 'emails.txt'
s3 = boto3.resource('s3')
bucket = s3.Bucket(bucket_name)
obj = bucket.Object(file_key)
all_email_list = obj.get()['Body'].read().decode('utf-8').splitlines()

# send a message to each subscribed email address
for email in email_list:
    if email in all_email_list:
        message = 'STAMP Welcome'
        sns.publish(TopicArn=topic_arn, Message=message, Subject='STAMP', MessageAttributes={
            'email': {
                'DataType': 'String',
                'StringValue': email
            }
        })
        print(f'Sent message to {email}')
    else:
        print(f'{email} is not in the email list')
