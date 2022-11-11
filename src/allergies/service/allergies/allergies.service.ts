import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AllergiesDto } from 'src/allergies/dto/allergies.dto';
import {
  Allergies,
  allergiesDocument,
} from 'src/allergies/schema/allergies.schema';

@Injectable()
export class AllergiesService {
  constructor(
    @InjectModel(Allergies.name)
    private allergiesModel: Model<allergiesDocument>,
  ) { }
  async createAllergies(allergiesDetails: AllergiesDto) {
    const newAllergies = await this.allergiesModel.create(allergiesDetails);
    if (!newAllergies) {
      const allergToSave = new this.allergiesModel(allergiesDetails);
      return allergToSave.save();
    }
  }

  async getAllergies() {
    return await this.allergiesModel.find({});
  }

  async getAllergiesById(id: number): Promise<Allergies> {
    return await this.allergiesModel.findOne({ _id: id });
  }
  async DeleteAllergies(id: number) {
    const deleteAllerg = await this.allergiesModel.findById({ _id: id });
    if (!deleteAllerg)
      return new HttpException(
        'Allerg with id have being treated',
        HttpStatus.NOT_FOUND,
      );
    return this.allergiesModel.deleteOne({ _id: id });
  }
}
