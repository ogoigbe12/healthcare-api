import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type treatmentDocument = Treatment & Document;

@Schema()
export class Treatment {
  @Prop()
  MedicalHistory: string;

  @Prop()
  ListSymptoms: string;

  @Prop()
  goalsandobjective: string;

  @Prop()
  Interventions: string;

  @Prop()
  TreatmentTracking: string;

  @Prop()
  PreventionPlan: string;
}

export const TreatmentSchema = SchemaFactory.createForClass(Treatment);
