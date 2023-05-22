import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GateService {
  constructor(private prisma: PrismaService) {}
  async vehicleIn(lisencePlate: string, nim: string) {
    await this.prisma.parkingData.create({
      data: {
        lisencePlate,
        nim,
      },
    });
  }
  async vehicleOut(lisencePlate: string, nim: string) {
    await this.prisma.parkingData.delete({
      where: {
        ownerIdentifier: {
          lisencePlate,
          nim,
        },
      },
    });
  }
}
