import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AllergiesController } from './controller/allergies/allergies.controller';
import { Allergies, AllergiesSchema } from './Schema/allergies.schema';
import { AllergiesService } from './service/allergies/allergies.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Allergies.name, schema: AllergiesSchema },
    ]),
  ],
  controllers: [AllergiesController],
  providers: [AllergiesService],
})
export class AllergiesModule {}
