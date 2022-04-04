output "s3_bucket_name" {
  discription = "Name of S3 bucket hosting the app"
  value = resource.aws_s3_bucket.hosting.id
}