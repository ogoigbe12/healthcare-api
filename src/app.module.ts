import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { User, UserSchema } from './users/Schema/user.schema';
import { UsersModule } from './users/users.module';
import { TreatmentPlanModule } from './treatment-plan/treatment-plan.module';
import { AllergiesModule } from './allergies/allergies.module';
import { LabsTestsModule } from './labs-tests/labs-tests.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB),
    UsersModule,
    TreatmentPlanModule,
    AllergiesModule,
    LabsTestsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
