import { Controller, Get, Inject, Injectable } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
@Injectable()
export class AppController {
  constructor(@Inject(AppService) private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'getProducts' })
  getProducts(): Array<any> {
    return this.appService.getAllProducts();
  }
}
