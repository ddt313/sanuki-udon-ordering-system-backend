import { IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'name is required' })
  readonly name: string;

  readonly description?: string;

  @IsNotEmpty({ message: 'price is required' })
  @IsNumber({ allowNaN: false, allowInfinity: false })
  @Min(0, { message: 'price must be more than 0' })
  readonly price: number;

  @IsNotEmpty({ message: 'quantity is required' })
  @IsNumber({ allowNaN: false, allowInfinity: false })
  @Min(0, { message: 'quantity must be more than 0' })
  readonly quantity: number;

  readonly image?: string;
}
