import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type labstestsDocument = Labstests & Document;

@Schema()
export class Labstests {
  @Prop()
  TestName: string;

  @Prop()
  ItemCode: string;

  @Prop()
  ItemGroup: string;

  @Prop()
  Department: string;

  @Prop()
  ResultFormat: string;

  @Prop()
  Description: string;
}

export const LabstestsSchema = SchemaFactory.createForClass(Labstests);
