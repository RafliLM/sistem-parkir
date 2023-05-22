import { Module } from '@nestjs/common';
import { ReportModule } from './report/report.module';
import { PrismaModule } from './prisma/prisma.module';
import { NotificationModule } from './notification/notification.module';
import { GateModule } from './gate/gate.module';

@Module({
  imports: [ReportModule, PrismaModule, NotificationModule, GateModule],
})
export class AppModule {}
