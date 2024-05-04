import { Test, TestingModule } from '@nestjs/testing';
import { PlugService } from './plug.service';
import {BrasilApiService} from "./brasilapi/brasilapi.service";

describe('PlugService', () => {
  let service: PlugService;

  const mockBrasilApiService = {
    zipcode: jest.fn().mockResolvedValue({
      street: "Av. Paulista",
      city: "São Paulo",
      state: "SP",
      country: "Brazil"
    })
  };

  const mockBigdatacorpService = {
    zipcode: null
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlugService,
        { provide: BrasilApiService, useValue: mockBrasilApiService },
      ],
    }).compile();

    service = module.get<PlugService>(PlugService);
  });

  it('should return address details for a valid zipcode', async () => {
    const zipcode = '01311-200';
    const address = await service.zipcode(zipcode);
    expect(address).toEqual({
      street: "Av. Paulista",
      city: "São Paulo",
      state: "SP",
      country: "Brazil"
    });
    expect(mockBrasilApiService.zipcode).toHaveBeenCalledWith(zipcode);
  });

});
