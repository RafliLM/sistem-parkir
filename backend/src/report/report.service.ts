import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReportDto } from './dto';
import { createTransport } from 'nodemailer';

@Injectable({})
export class ReportService {
  constructor(private prisma: PrismaService) {}
  async submitReport(dto: ReportDto) {
    const parkingData = await this.prisma.parkingData.findFirst({
      where: {
        lisencePlate: dto.lisencePlate,
      },
    });

    const student = await this.prisma.student.findUnique({
      where: {
        nim: parkingData.nim,
      },
    });

    await this.prisma.violation.create({
      data: {
        evidence: dto.evidence,
        description: dto.description,
        studentId: student.id,
      },
    });

    const transport = createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'raflilutfiansyah28@gmail.com',
        pass: 'zntfdlhnwanutvdo',
      },
    });
    transport.sendMail(
      {
        from: 'raflilutfiansyah28@gmail.com',
        to: student.email,
        subject: 'Pelanggaran parkir POLBAN',
        html: `
          <h1>${dto.lisencePlate}</h1>
          <h1>${student.name}</h1>
          <p>${dto.description}</p>
        `,
        attachments: [
          {
            filename: 'violation evidence.jpg',
            content: dto.evidence.split('base64,')[1],
            encoding: 'base64',
          },
        ],
      },
      (err) => {
        if (err) {
          throw new InternalServerErrorException(
            'Report unavailable, try again later!',
          );
        }
      },
    );
    return 'Report submitted!';
  }
}
