import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
// import { create } from 'domain';
import { TreatmentDto } from 'src/treatment-plan/dtos/treatment.dto';
import { TreatmentPlanService } from 'src/treatment-plan/services/treatment-plan/treatment-plan.service';

@Controller('treatment-plan')
export class TreatmentPlanController {
  constructor(private treatmentplan: TreatmentPlanService) {}
  @Post('create')
  @UsePipes(new ValidationPipe())
  async create(@Body() treatmentData: TreatmentDto) {
    const treatment = await this.treatmentplan.createTreatment(treatmentData);
    if (treatment) return { msg: 'Treatment Plan Created' };
    return new HttpException(
      'treament plan already exit',
      HttpStatus.BAD_REQUEST,
    );
  }
  @Get()
  async getTreatmentPlans() {
    const plans = await this.treatmentplan.getTreatmentPlans();
    if (plans.length > 0) return plans;
    throw new HttpException('treatment plan not found', HttpStatus.NOT_FOUND);
  }

  @Get(':id')
  async getTreatmentById(@Param('id') id: number) {
    const getPlan = await this.treatmentplan.getTreatmentById(id);
    if (!getPlan)
      throw new HttpException('plan not found', HttpStatus.NOT_FOUND);
    return getPlan;
  }
  @Delete(':id')
  deletePlan(@Param('id') id: number) {
    return this.treatmentplan.DeleteTreatmentPlan(id);
  }
}
