import { Module } from '@nestjs/common';
import { PlugService } from './plug.service';
import { BrasilApiModule } from './brasilapi/brasilapi.module';

@Module({
  providers: [PlugService],
  imports: [BrasilApiModule],
  exports: [PlugService],
})
export class PlugModule {
  // PlugModule is a singleton
}
