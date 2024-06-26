import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type productDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  quantity: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
