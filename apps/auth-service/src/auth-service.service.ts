import { Injectable } from '@nestjs/common';
import { SERVICES_PORTS } from '@app/common';

@Injectable()
export class AuthServiceService {
  getHello(): string {
    return `Hello from auth service running on port ${SERVICES_PORTS.AUTH_SERVICE}`;
  }
}