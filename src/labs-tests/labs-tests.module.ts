import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LabsTestsController } from './controller/labs-tests/labs-tests.controller';
import { Labstests, LabstestsSchema } from './schema/labs-tests.schema';
import { LabsTestsService } from './service/labs-tests/labs-tests.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Labstests.name, schema: LabstestsSchema },
    ]),
  ],
  controllers: [LabsTestsController],
  providers: [LabsTestsService],
})
export class LabsTestsModule { }
