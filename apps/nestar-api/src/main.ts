import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(new ValidationPipe());
	console.log('localhost:', process.env.PORT_API);
	await app.listen(process.env.PORT_API ?? 3000);
}
bootstrap().catch((error) => {
	console.error('Bootstrap failed:', error);
	process.exit(1);
});
