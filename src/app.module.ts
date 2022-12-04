import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { HandlebarsAdapter, MailerModule } from '@nestjs-modules/mailer';
require('dotenv').config();

@Module({
	imports: [
		MailerModule.forRoot({
			transport: {
				host: process.env.SMTP,
				port: process.env.SMTP_PORT,
				secure: false,
				auth: {
					user: process.env.EMAIL_USER,
					pass: process.env.EMAIL_PASSWORD,
				}
			},
			defaults: {
				from:'"!NSPiRE no reply" <biuro@be-nspired.com>',
			},
			template: {
				dir: __dirname + '/templates',
				adapter: new HandlebarsAdapter(),
				options: {
					strict: true,
				},
			},
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
