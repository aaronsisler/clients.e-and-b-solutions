variable "region" {
  description = "This is the cloud hosting region where your webapp will be deployed."
  type        = string
  default     = "us-east-1"
}

variable "hosted_zone" {
  description = "The Route53 zone name of the custom domain"
  type        = string
}

variable "env_name" {
  description = "This is the environment where your webapp is deployed. beta or prod"
  type        = string
}

variable "custom_domain" {
  description = "This is URL that will be linked to Cloudfront deployment"
  type        = string
}
