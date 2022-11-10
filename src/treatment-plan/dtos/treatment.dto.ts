import { IsNotEmpty } from 'class-validator';

export class TreatmentDto {
  @IsNotEmpty()
  MedicalHistory: string;

  @IsNotEmpty()
  ListSymptoms: string;

  @IsNotEmpty()
  goalsandobjective: string;

  @IsNotEmpty()
  Interventions: string;

  @IsNotEmpty()
  TreatmentTracking: string;

  @IsNotEmpty()
  PreventionPlan: string;
}
