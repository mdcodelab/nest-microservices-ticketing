import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { SERVICES_PORTS } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  const port = process.env.PORT
    ? Number(process.env.PORT)
    : SERVICES_PORTS.API_GATEWAY;

  await app.listen(port);
  console.log(`🚀 API Gateway running on port ${port}`);
  console.log(`Check http://localhost:${port}`);
}
bootstrap();
