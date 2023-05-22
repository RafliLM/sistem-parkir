import { Body, Controller, Post } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportDto } from './dto';

@Controller('report')
export class ReportController {
  constructor(private reportService: ReportService) {}

  @Post()
  submitReport(@Body() dto: ReportDto) {
    return this.reportService.submitReport(dto);
  }
}
