import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	console.log('localhost:', process.env.PORT_API);
	await app.listen(process.env.PORT_API ?? 3000);
}
bootstrap().catch((error) => {
	console.error('Bootstrap failed:', error);
	process.exit(1);
});
