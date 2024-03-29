import { NestFactory } from '@nestjs/core'
import * as cookieParser from 'cookie-parser'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	app.setGlobalPrefix('api')
	app.use(cookieParser())
	app.enableCors({
		origin: [
			'http://localhost:3000',
			'https://localhost:3000',
			'https://31.129.56.134:3000',
			'https://31.129.56.134:3000',
			'https://31.129.56.134',
			'https://31.129.56.134',
			'http://gogogox.ru',
			'https://gogogox.ru',
			'http://www.gogogox.ru',
			'https://www.gogogox.ru'
		],
		credentials: true,
		exposedHeaders: 'set-cookie'
	})

	await app.listen(4200)
}
bootstrap()
