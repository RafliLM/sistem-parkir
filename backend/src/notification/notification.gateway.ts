import { OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { NotificationDto } from './dto';

@WebSocketGateway({ cors: true })
export class NotificationGateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(socket.id);
      console.log('Connected!');
    });
  }

  @SubscribeMessage('notification')
  handleMessage(@MessageBody() body: any) {
    try {
      const data: NotificationDto = JSON.parse(body);
      this.server.emit('notification', data);
    } catch (error) {
      console.log(error);
    }
  }
}
