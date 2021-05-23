import { Injectable } from '@nestjs/common';
import data from 'src/data/data.module'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getProducts(){
    return data;
  }
}
