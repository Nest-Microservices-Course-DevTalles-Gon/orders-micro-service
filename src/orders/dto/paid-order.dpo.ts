import { IsString, IsUrl, IsUUID } from 'class-validator';

export class PaidOrderDto {

    @IsString()
    stripePaymentId: string

    @IsString()
    @IsUUID()
    orderId

    @IsString()
    @IsUrl()
    receiptUrl: string
}