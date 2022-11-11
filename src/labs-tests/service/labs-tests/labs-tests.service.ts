import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LabstestsDto } from 'src/labs-tests/dto/labs-tests.dto';
import {
  Labstests,
  labstestsDocument,
} from 'src/labs-tests/schema/labs-tests.schema';

@Injectable()
export class LabsTestsService {
  constructor(
    @InjectModel(Labstests.name)
    private labstestModel: Model<labstestsDocument>,
  ) { }
  async createLabtest(labtestsDetaile: LabstestsDto) {
    const newLabtest = await this.labstestModel.create(labtestsDetaile);
    if (!newLabtest) {
      const labToSave = new this.labstestModel(labtestsDetaile);
      return labToSave.save();
    }
  }
  async getLabtest() {
    return await this.labstestModel.find({});
  }
  async DeleteLabtest(id: number) {
    const deleteTest = await this.labstestModel.findById({ _id: id });
    if (!deleteTest)
      return new HttpException(
        'Labtests with id have being deleted',
        HttpStatus.NOT_FOUND,
      );
    return this.labstestModel.deleteOne({ _id: id });
  }
}
