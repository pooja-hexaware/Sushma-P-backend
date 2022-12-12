import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type toppingsDocument = toppings & Document;

@Schema()
export class toppings {

  @Prop({required: true})
  toppingsName: string;

  @Prop({required:true})
  price: number;
  
}

export const toppingsSchema = SchemaFactory.createForClass(toppings); 