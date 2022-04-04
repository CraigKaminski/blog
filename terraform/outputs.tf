output "s3_bucket_name" {
  description = "Name of S3 bucket hosting the app"
  value       = resource.aws_s3_bucket.hosting.id
}