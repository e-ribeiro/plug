import { Injectable } from '@nestjs/common';
import { ZipCodeResponse } from '../dto/zipcode.dto';
import { HttpService } from '@nestjs/axios';
import { CepResponse } from './dto/cep.dto';
import { firstValueFrom, map } from 'rxjs';

@Injectable()
export class BrasilApiService {
  private readonly baseUrl = 'https://brasilapi.com.br/api';
  private readonly timeout = 15000;
  private readonly retryAttempts = 3;

  constructor(private readonly httpService: HttpService) {}

  async zipcode(zipCode: string): Promise<ZipCodeResponse> {
    const response$ = this.httpService
      .get<CepResponse>(`${this.baseUrl}/cep/v1/${zipCode}`, {
        timeout: this.timeout,
      })
      .pipe(map((response) => this.mapCepResponse(response.data)));

    return await firstValueFrom(response$);
  }


  /***************************************************************************/
  // Not implemented methods
  /***************************************************************************/

  async people(cpf: string): Promise<any> {
    throw new Error('Method not implemented. Data: ' + cpf);
  }

  private mapCepResponse(response: CepResponse): ZipCodeResponse {
    return {
      zipCode: response.cep,
      state: response.state,
      city: response.city,
      neighborhood: response.neighborhood,
      street: response.street,
      country: 'Brasil',
      location: {
        latitude: response?.location?.coordinates?.latitude,
        longitude: response?.location?.coordinates?.longitude,
      },
    };
  }
}
