import { Controller, Get, Param } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  hello() {
    return 'hello world';
  }
  @Get('/:id')
  getUser(@Param('id') id: string) {
    return 'user ' + id;
  }
}
