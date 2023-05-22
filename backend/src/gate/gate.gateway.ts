import { OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { GateService } from './gate.service';

@WebSocketGateway()
export class GateGateway implements OnModuleInit {
  constructor(private gateService: GateService) {}
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(socket.id);
      console.log('Connected!');
    });
  }

  @SubscribeMessage('gate')
  async handleMessage(@MessageBody() body: any) {
    try {
      const data = JSON.parse(body);
      if (data.lisencePlate) {
        if (data.nim) {
          if (data.status == 'IN') {
            await this.gateService.vehicleIn(data.lisencePlate, data.nim);
          } else if (data.status == 'OUT') {
            await this.gateService.vehicleOut(data.lisencePlate, data.nim);
          }
        } else {
          this.server.emit('notification', {
            message: 'Kendaraan masuk tanpa KTM',
            type: 'NOTIFICATION',
          });
        }
      } else {
        this.server.emit('notification', {
          message: 'Kendaraan masuk tanpa Plat Nomor',
          type: 'NOTIFICATION',
        });
      }
      // this.server.emit('notification', JSON.parse(body));
    } catch (error) {
      console.log(error);
    }
  }
}
