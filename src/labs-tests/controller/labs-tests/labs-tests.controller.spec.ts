import { Test, TestingModule } from '@nestjs/testing';
import { LabsTestsController } from './labs-tests.controller';

describe('LabsTestsController', () => {
  let controller: LabsTestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LabsTestsController],
    }).compile();

    controller = module.get<LabsTestsController>(LabsTestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
