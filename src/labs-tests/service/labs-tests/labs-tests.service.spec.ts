import { Test, TestingModule } from '@nestjs/testing';
import { LabsTestsService } from './labs-tests.service';

describe('LabsTestsService', () => {
  let service: LabsTestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LabsTestsService],
    }).compile();

    service = module.get<LabsTestsService>(LabsTestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
