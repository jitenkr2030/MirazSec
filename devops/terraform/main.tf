provider "aws" {
  region = var.region
}

resource "aws_s3_bucket" "example" {
  bucket = "example-bucket"
  acl    = "private"
}

output "bucket_arn" {
  value = aws_s3_bucket.example.arn
}
