import { IsNotEmpty } from 'class-validator';

export class AllergiesDto {
  @IsNotEmpty()
  Allerg: string;

  @IsNotEmpty()
  Symptoms: string;

  @IsNotEmpty()
  Treatment: string;
}
