import { Module } from '@nestjs/common';
import { PaymentsController } from './controller/payments/payments.controller';
import { PaymentsService } from './service/payments/payments.service';

@Module({
  controllers: [PaymentsController],
  providers: [
    {
      provide: 'PAYMENTS_SERVICE',
      useClass: PaymentsService,
    },
  ],
})
export class PaymentsModule {}
