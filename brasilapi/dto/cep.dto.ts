export interface CepResponse {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  service: string;
  location: {
    type: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
}
