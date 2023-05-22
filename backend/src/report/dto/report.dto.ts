import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class ReportDto {
  @Matches(/^[A-Z]{1,2}\d{1,4}[A-Z]{1,3}$/, {
    message: 'Plat nomor tidak valid',
  })
  @IsNotEmpty()
  lisencePlate: string;

  @IsString()
  @IsNotEmpty()
  evidence: string;

  @IsString()
  description: string;
}
