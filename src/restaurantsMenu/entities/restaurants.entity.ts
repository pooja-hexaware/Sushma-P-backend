import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type restaurantDocument = restaurant & Document;

@Schema()
export class restaurant {

  @Prop({required: true})
  itemName: string;

  @Prop({required:true})
  itemDescription: string;

  @Prop({required: true})
  amount: string;

  @Prop({required: true})
  toppings: string[]

}

export const restaurantSchema = SchemaFactory.createForClass(restaurant);
