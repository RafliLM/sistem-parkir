import { Module } from '@nestjs/common';
import { GateService } from './gate.service';
import { GateGateway } from './gate.gateway';

@Module({
  providers: [GateService, GateGateway],
})
export class GateModule {}
