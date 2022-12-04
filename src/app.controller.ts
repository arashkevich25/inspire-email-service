import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';
import { Patterns } from './patterns';
import { ResetPasswordDto } from './dto/ResetPassword.dto';
import { WelcomeEmailDto } from './dto/WelcomeEmail.dto';
import { ReportPostViolationDto } from './dto/ReportPostViolation.dto';
import { ReportUserViolationDto } from './dto/ReportUserViolation.dto';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@EventPattern(Patterns.ResetPassword)
	resetPassword(data: ResetPasswordDto): void {
		this.appService.resetPassword(data);
	}

	@EventPattern(Patterns.WelcomeEmail)
	emailMail(data: WelcomeEmailDto): void {
		this.appService.welcomeEmail(data);
	}

	@EventPattern(Patterns.ReportPostViolation)
	reportPostViolation(data: ReportPostViolationDto): void {
		this.appService.reportPostViolation(data);
	}

	@EventPattern(Patterns.ReportUserViolation)
	reportUserViolation(data: ReportUserViolationDto): void {
		this.appService.reportUserViolation(data);
	}
}
