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
import { LabstestsDto } from 'src/labs-tests/dto/labs-tests.dto';
import { LabsTestsService } from 'src/labs-tests/service/labs-tests/labs-tests.service';

@Controller('labs-tests')
export class LabsTestsController {
  constructor(private labtestservice: LabsTestsService) {}
  @Post('create')
  @UsePipes(new ValidationPipe())
  async create(@Body() labtestData: LabstestsDto) {
    const labtest = await this.labtestservice.createLabtest(labtestData);
    if (labtest) return { msg: 'Labtest was successfully created' };
    return new HttpException('Labtest already exit', HttpStatus.BAD_REQUEST);
  }
  @Get()
  async getlabtest() {
    const getlab = await this.labtestservice.getLabtest();
    if (getlab.length > 0) return getlab;
    throw new HttpException('labtest is not found', HttpStatus.NOT_FOUND);
  }
  @Delete(':id')
  deleteTest(@Param('id') id: number) {
    return this.labtestservice.DeleteLabtest(id);
  }
}
