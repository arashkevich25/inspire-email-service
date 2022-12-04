import { NestFactory,  } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
require('dotenv').config();

const logger = new Logger();

async function bootstrap() {
	const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
		transport: Transport.RMQ,
		options: {
			urls: [`amqp://${process.env.AMQP_USER}:${process.env.AMQP_PASSWORD}@${process.env.AMQP_URL}:${process.env.AMQP_PORT}`],
			queue: `${process.env.INFRA}_email_queue`,
			queueOptions: {
				durable: false
			},
		},
	});
	app.listen(() => logger.log('Email microservice is ready'));
}

bootstrap();
