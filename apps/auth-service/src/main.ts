import { NestFactory } from '@nestjs/core';
import { AuthServiceModule } from './auth-service.module';
import { SERVICES_PORTS } from '@app/common';

async function bootstrap() {
  const port = SERVICES_PORTS.AUTH_SERVICE;
   
  const app = await NestFactory.create(AuthServiceModule);
  await app.listen(port);
  console.log(`🚀 Auth Service running on port ${port}`);
  console.log(`Check http://localhost:${port}`);  
}
bootstrap();
