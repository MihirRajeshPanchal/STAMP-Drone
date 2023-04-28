import boto3

def upload_s3(file_path):
    # Set up a client for S3
    s3 = boto3.client('s3')

    # Set up the name of the bucket and the name of the file you want to upload
    bucket_name = 's3stamp'
    file_name = file_path.split("/")[-1]

    # Use the put_object method to upload the file to S3
    with open(file_path, "rb") as f:
        s3.upload_fileobj(f, bucket_name, file_name)