import { Module } from '@nestjs/common';
import { CustomerAddressesService } from './customer_addresses.service.js';
import { CustomerAddressesController } from './customer_addresses.controller.js';

@Module({
  controllers: [CustomerAddressesController],
  providers: [CustomerAddressesService],
})
export class CustomerAddressesModule {}
