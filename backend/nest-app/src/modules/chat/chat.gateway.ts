import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';

import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: 'http://localhost:3000',
    credentials: true,
  },
})
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message:send')
  handleMessage(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket,
  ) {
    try {
      // Chuyển string JSON thành object
      const parsedData: {
        content: string;
      } = JSON.parse(data);

      client.emit('message:new', {
        content: parsedData.content,
        sender: 'server',
        createdAt: new Date(),
      });
    } catch (error) {
      client.emit('message:error', {
        message: 'Data không hợp lệ',
      });
    }
  }

  handle;
}
