import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {

  constructor(
    @Inject("PRODUCT_SERVICE") private readonly productService: ClientProxy
  ) {}

  getProducts() {
    return this.productService.send<string>({cmd: "getProducts"}, {});
  }
}
