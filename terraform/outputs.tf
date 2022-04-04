output "aws_s3_bucket" {
  description = "Name of S3 bucket hosting the app"
  value       = resource.aws_s3_bucket.hosting.id
}