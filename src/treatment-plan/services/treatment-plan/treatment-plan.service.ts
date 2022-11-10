import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TreatmentDto } from 'src/treatment-plan/dtos/treatment.dto';
import {
  Treatment,
  treatmentDocument,
} from 'src/treatment-plan/Schema/treatment.schema';

@Injectable()
export class TreatmentPlanService {
  constructor(
    @InjectModel(Treatment.name)
    private treatmentModel: Model<treatmentDocument>,
  ) {}
  async createTreatment(treatmentDetails: TreatmentDto) {
    const newTreatment = await this.treatmentModel.create(treatmentDetails);
    if (!newTreatment) {
      const dataToSave = new this.treatmentModel(treatmentDetails);
      return dataToSave.save();
    }
  }

  async getTreatmentPlans() {
    return await this.treatmentModel.find({});
  }

  async getTreatmentById(id: number): Promise<Treatment> {
    return await this.treatmentModel.findOne({ _id: id });
  }
  async DeleteTreatmentPlan(id: number) {
    const deletePlan = await this.treatmentModel.findById({ _id: id });
    if (!deletePlan)
      return new HttpException(
        'treatment plan with id does not exit',
        HttpStatus.NOT_FOUND,
      );
    return this.treatmentModel.deleteOne({ _id: id });
  }
}
