import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type cartDocument = cart & Document;

@Schema()
export class cart {

  @Prop({required: true})
  itemName: string;

  @Prop({required: true})
  quantity: number;

  @Prop({required: true})
  price: string;

}

export const cartSchema = SchemaFactory.createForClass(cart);
