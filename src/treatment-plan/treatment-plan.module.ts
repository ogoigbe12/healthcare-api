import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TreatmentPlanController } from './controllers/treatment-plan/treatment-plan.controller';
import { Treatment, TreatmentSchema } from './schema/treatment.schema';
import { TreatmentPlanService } from './services/treatment-plan/treatment-plan.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Treatment.name, schema: TreatmentSchema },
    ]),
  ],
  controllers: [TreatmentPlanController],
  providers: [TreatmentPlanService],
})
export class TreatmentPlanModule { }
