import { IsNotEmpty, IsString } from 'class-validator';

enum MessageType {
  NOTIFICATION,
  ALERT,
  PROCESS,
}

export class NotificationDto {
  @IsString()
  @IsNotEmpty()
  message: string;

  @IsNotEmpty()
  type: MessageType;
}
