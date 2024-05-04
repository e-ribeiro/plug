export interface ZipCodeResponse {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  neighborhood: string;
  location: {
    latitude: number;
    longitude: number;
  };
}
