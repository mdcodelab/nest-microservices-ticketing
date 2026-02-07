import { Injectable } from '@nestjs/common';
import { SERVICES_PORTS } from '@app/common';



@Injectable()
export class ApiGatewayService {
  getHello(): string {
    console.log('ApiGatewayService.getHello() called');
    return `Hello word from api gateway 
    running on port
     ${SERVICES_PORTS.API_GATEWAY}`;
  }
}
