module "service" {
  source = ""

  account_name = var.account_name
  role_arn     = var.role_arn
  isFrontend   = false

  tags = var.tags

  desired_count = 1
  max_count     = 5
  min_count     = 1

  container_definition = {
    service   = var.name
    image     = "${var.base_image}/${var.image_name}:${var.image_tag}"
    essential = true
    portMappings = [{
      containerPort = 80
      hostPort      = 80
    }]
    ports       = [{ port = 80, protocol = "TCP" }]
    cpu         = 256
    memory      = 1024
    environment = var.environment_variables
  }
  cpu    = 512
  memory = 1024
}
