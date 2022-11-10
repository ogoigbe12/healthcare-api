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
import { AllergiesDto } from 'src/allergies/dto/allergies.dto';
import { AllergiesService } from 'src/allergies/service/allergies/allergies.service';

@Controller('allergies')
export class AllergiesController {
  constructor(private allergiesService: AllergiesService) {}
  @Post('create')
  @UsePipes(new ValidationPipe())
  async create(@Body() allergiesData: AllergiesDto) {
    const allerg = await this.allergiesService.createAllergies(allergiesData);
    if (allerg) return { msg: 'Allerg Created' };
    return new HttpException('allerg already exit', HttpStatus.BAD_REQUEST);
  }

  @Get()
  async getAllerg() {
    const gets = await this.allergiesService.getAllergies();
    if (gets.length > 0) return gets;
    throw new HttpException('allerg not found', HttpStatus.NOT_FOUND);
  }

  @Get(':id')
  async getAllergById(@Param('id') id: number) {
    const getOne = await this.allergiesService.getAllergiesById(id);
    if (!getOne)
      throw new HttpException('allerg does not exit', HttpStatus.BAD_REQUEST);
    return getOne;
  }

  @Delete(':id')
  deleteAllerg(@Param('id') id: number) {
    return this.allergiesService.DeleteAllergies(id);
  }
}
