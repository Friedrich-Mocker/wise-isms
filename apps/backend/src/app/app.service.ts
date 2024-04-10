import { Injectable } from '@nestjs/common';
import { SharedDataType } from '@wise-isms/shared';

@Injectable()
export class AppService {
  getData(): SharedDataType {
    return { test: true, anotherTest: 'test' };
  }
}
