# Plug Module for NestJS: Seamless External Services Integration

The Plug module is a specialized component designed for NestJS applications, facilitating seamless integration with external services. It embodies the principles of hexagonal architecture by serving as a robust boundary that isolates the application domain from external service dependencies. This module offers a clean and well-defined interface that abstracts the complexities of communicating with various external APIs, allowing the core application to remain clean and unaware of the external implementations.

Key Features:
- **Abstraction of External APIs**: Provides a uniform interface to interact with different external services, ensuring the core domain stays pristine.
- **Hexagonal Architecture Compliance**: Enhances maintainability and scalability by adhering to the principles of hexagonal architecture, promoting loose coupling and high cohesion.
- **Ease of Integration**: Designed to be easily integrated into any NestJS project with minimal setup, allowing developers to plug-and-play with external services.
- **Scalable and Maintainable**: Built with scalability and maintainability in mind, supporting easy updates and additions of new services without impacting the core application.

The Plug module is ideal for developers looking to extend their NestJS applications with external services while keeping the codebase clean and maintainable.

Aqui está um exemplo de documentação em Markdown para o módulo Plug, especificamente para o método `zipcode` que recupera endereços de uma API pública baseada em CEPs:

## Example: Zipcode Integration

The `zipcode` method in the Plug module allows NestJS applications to seamlessly retrieve address details from a public API based on the provided postal code (CEP). Below are the steps and examples to use this method effectively in your project.

## Setup

Ensure the Plug module is installed and configured in your NestJS application. Import the module into your service where you intend to use the `zipcode` method.

```typescript
import { PlugService } from './plug.service';

constructor(private plugService: PlugService) {}
```

## Usage

To use the `zipcode` method, simply call it with a valid postal code as its argument. The method returns an object containing the address details associated with the postal code.

### Example

Here's how you can call the `zipcode` method:

```typescript
async function getAddressDetails(zipcode: string) {
  try {
    const address = await this.plugService.zipcode(zipcode);
    console.log(address);
    return address;
  } catch (error) {
    console.error('Failed to retrieve address:', error);
  }
}
```

### Sample Response

The `zipcode` method returns an address object like the following:

```json
{
  "street": "Av. Paulista",
  "city": "São Paulo",
  "state": "SP",
  "country": "Brazil"
}
```

## Handling Errors

It's important to handle potential errors that may arise during the API call, such as invalid postal codes or network issues.

```typescript
async function getAddressDetails(zipcode: string) {
  try {
    const address = await this.plugService.zipcode(zipcode);
    console.log(address);
    return address;
  } catch (error) {
    console.error('Failed to retrieve address due to:', error.message);
    return null;
  }
}
```

By following these steps, you can effectively utilize the `zipcode` method in the Plug module to enhance your application with dynamic address retrieval capabilities.
