import { Injectable } from '@nestjs/common';

@Injectable()
export class NestarBatchService {
  getHello(): string {
    return 'Hello to Nestar BATCH server!';
  }
}
