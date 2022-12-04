import { Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ResetPasswordDto } from './dto/ResetPassword.dto';
import { WelcomeEmailDto } from './dto/WelcomeEmail.dto';
import { ReportPostViolationDto } from './dto/ReportPostViolation.dto';
import { AdminEmails, EmailsFrom } from './constants/emails';
import { ReportUserViolationDto } from './dto/ReportUserViolation.dto';

@Injectable()
export class AppService {
	constructor(private readonly mailerService: MailerService) {}
	logger = new Logger();

	async resetPassword(data: ResetPasswordDto) {
		try {
			await this
				.mailerService
				.sendMail({
					to: data.user.email,
					from: EmailsFrom.NoReply,
					subject: 'Set new password to !NSPiRE',
					template: 'reset-password',
					context: {
						token: data.resetPasswordToken,
					}
				});
			this.logger.log(`Sent`)
		} catch(err) {
			this.logger.error(`Error while reset password email`, err)
		}
	}

	async welcomeEmail(data: WelcomeEmailDto) {
		try {
			await this
				.mailerService
				.sendMail({
					to: data.email,
					from: EmailsFrom.NoReply,
					subject: 'Welcome !NSPiRE',
					template: 'welcome',
				});
		} catch(err) {
			this.logger.error(`Error while sending welcome email`, err)
		}
	}

	async reportPostViolation(data: ReportPostViolationDto) {
		try {
			await this
				.mailerService
				.sendMail({
					to: [AdminEmails.Admin],
					from: EmailsFrom.NoReply,
					subject: 'Report post violation [admin topic]',
					html: `<b>User with id: ${data.reporterId} report post violation: </b> <br/><br/> Post name: "${data.postName}" (id: ${data.postId}) <br/> Reason: ${data.reasonCode} (id: ${data.reasonId}) <br/> User name: ${data.userName} (id: ${data.userId})`,
				});
		} catch(err) {
			this.logger.error(`Error while sending admin email`, err)
		}
	}

	async reportUserViolation(data: ReportUserViolationDto) {
		try {
			await this
				.mailerService
				.sendMail({
					to: [AdminEmails.Admin],
					from: EmailsFrom.NoReply,
					subject: 'Report user violation [admin topic]',
					html: `<b>User with id: ${data.reporterId} report post violation: </b> <br/><br/> User name: "${data.userName}" (id: ${data.userId}) <br/> Reason: ${data.reasonCode} (id: ${data.reasonId})`,
				});
		} catch(err) {
			this.logger.error(`Error while sending admin email`, err)
		}
	}
}
