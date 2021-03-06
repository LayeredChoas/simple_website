import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.BACKEND_PORT || 5000;
  console.log("this: ", port.valueOf());
  await app.listen(port);
}
bootstrap();
