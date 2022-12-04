data "terraform_remote_state" "workload" {
  backend = "s3"

  config = {
    bucket   = "xx-${var.account_name}"
    region   = var.region
    key      = "xx/${var.account_name}-baseline.tfstate"
    role_arn = var.role_arn
  }
}

locals {
  workload_config = data.terraform_remote_state.workload.outputs
}
