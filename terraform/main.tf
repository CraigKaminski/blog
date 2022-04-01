terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~>4.8.0"
    }
  }
  required_version = ">= 1.1.0"

  cloud {
    organization = "cstone"

    workspaces {
      name = "blog_web-app_s3"
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  region = "us-east-2"
}

resource "aws_s3_bucket" "hosting" {
  bucket = "blog-hosting"
}

resource "aws_s3_bucket_acl" "hosting" {
  bucket = aws_s3_bucket.hosting.id
  acl = "public-read"
}

resource "aws_s3_bucket_policy" "public_read" {
  bucket = aws_s3_bucket.hosting.id
  policy = data.aws_iam_policy_document.public_read.json
}

data "aws_iam_policy_document" "public_read" {
  statement {
    principals {
      type        = "*"
      identifiers = ["*"]
    }

    actions = [
      "s3:GetObject",
    ]

    resources = [
      "${aws_s3_bucket.hosting.arn}/*"
    ]
  }
}

resource "aws_s3_bucket_website_configuration" "hosting" {
  bucket = aws_s3_bucket.hosting.bucket

  index_document {
    suffix = "index.html"
  }
}
