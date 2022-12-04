name         = "email-service"
account_name = "prod"
tags = {
  "Env"       = "prod",
  "Service"   = "email-service",
  "ManagedBy" = "terraform"
}
role_arn   = "arn:aws:iam::124613390659:role/infrastructure-deployer"
image_name = "inspire-email-service"
isFrontend = false

environment_variables = [
  {
    "name" : "AMQP_PASSWORD",
    "value" : ""
  },
  {
    "name" : "AMQP_PORT",
    "value" : ""
  },
  {
    "name" : "AMQP_URL",
    "value" : ""
  },
  {
    "name" : "AMQP_USER",
    "value" : ""
  },
  {
    "name" : "EMAIL_PASSWORD",
    "value" : ""
  },
  {
    "name" : "EMAIL_USER",
    "value" : ""
  },
  {
    "name" : "INFRA",
    "value" : "prod"
  },
  {
    "name" : "SMTP",
    "value" : ""
  },
  {
    "name" : "SMTP_PORT",
    "value" : ""
  }
]
