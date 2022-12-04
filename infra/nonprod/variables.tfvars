name         = "email-service"
account_name = "nonprod"
tags = {
  "Env"       = "nonprod",
  "Service"   = "email-service",
  "ManagedBy" = "terraform"
}
role_arn   = "arn:aws:iam::563768983131:role/infrastructure-deployer"
image_name = "inspire-email-service"
isFrontend = true

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
    "value" : ""
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
