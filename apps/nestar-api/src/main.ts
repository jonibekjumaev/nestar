import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { LoggingInterceptor } from './libs/interceptor/logging.interceptor';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(new ValidationPipe());
	app.useGlobalInterceptors(new LoggingInterceptor());
	console.log('localhost:', process.env.PORT_API);
	await app.listen(process.env.PORT_API ?? 3000);
}
bootstrap().catch((error) => {
	console.error('Bootstrap failed:', error);
	process.exit(1);
});
