import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type allergiesDocument = Allergies & Document;

@Schema()
export class Allergies {
  @Prop()
  Allerg: string;

  @Prop()
  Symptoms: string;

  @Prop()
  Treatment: string;
}

export const AllergiesSchema = SchemaFactory.createForClass(Allergies);
