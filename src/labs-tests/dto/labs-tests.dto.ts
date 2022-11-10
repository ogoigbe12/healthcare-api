import { Contains, IsNotEmpty } from 'class-validator';

export class LabstestsDto {
  @IsNotEmpty()
  TestName: string;

  @IsNotEmpty()
  @Contains('#')
  ItemCode: string;

  @IsNotEmpty()
  ItemGroup: string;

  @IsNotEmpty()
  Department: string;

  @IsNotEmpty()
  ResultFormat: string;

  @IsNotEmpty()
  Description: string;
}
