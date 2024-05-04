import { Injectable } from '@nestjs/common';
import { PluggedEnum } from './plugged.enum';
import { PlugInterface } from './plug.interface';
import { BrasilApiService } from './brasilapi/brasilapi.service';
import { ZipCodeResponse } from './dto/zipcode.dto';

/**
 * PlugService handles the connections with different systems.
 * It manages a map of different services (plugged) and allows for easy access to their functionality.
 */
@Injectable()
export class PlugService {
  // A map to store partners system instances, indexed by PluggedEnum
  private readonly plugged: Map<PluggedEnum, PlugInterface>;

  /**
   * Initializes the PlugService and sets up the service systems map.
   * @param brasilapi
   */
  constructor(
    private readonly brasilapi: BrasilApiService,
  ) {
    // Initialize the plugged map
    this.plugged = new Map<PluggedEnum, PlugInterface>();
    // Add the BrasilApi service to the plugged map
    this.plugged.set(PluggedEnum.BrasilApi, this.brasilapi);
  }

  async zipcode(zipcode: string): Promise<ZipCodeResponse> {
    const api = this.plugged.get(PluggedEnum.BrasilApi);

    try {
      return await api.zipcode(zipcode);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
