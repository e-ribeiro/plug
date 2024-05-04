import { ZipCodeResponse } from './dto/zipcode.dto';

export interface PlugInterface {
  zipcode(zipcode: string): Promise<ZipCodeResponse>;
  // implement the rest of the methods
}
