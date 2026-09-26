import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  Query,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { AdminOrdersQueryDto, CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { JwtAuthGuard } from '../auth/guards/accessToken.guard';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/common/guards/role.guard';
import { Roles } from 'src/common/decorator/role.decorator';
import { Throttle } from '@nestjs/throttler';
import {
  CreateReturnItemDto,
  CreateReturnRequestDto,
} from './dto/create-return-item-request.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Throttle({
    default: {
      limit: 5,
      ttl: 60_000,
    },
  })
  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Req() req: Request & { user: any },
    @Body() createOrderDto: CreateOrderDto,
  ) {
    return this.orderService.create(req.user.userId, createOrderDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Req() req: Request & { user: any }) {
    return this.orderService.findAll(req.user.userId);
  }

  @Get('admin')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('ADMIN')
  async getAdminOrders(@Query() query: AdminOrdersQueryDto) {
    const data = await this.orderService.getAdminOrders(query);
    return {
      success: true,
      message: 'Lấy danh sách đơn hàng thành công',
      data,
      date: new Date().toISOString(),
      path: '/orders/admin',
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(+id);
  }

  @Patch('admin/update-status')
  update(@Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('orderDetail/:orderCode')
  async getOrderDetail(
    @Req() req: Request & { user: any },
    @Param('orderCode') orderCode: string,
  ) {
    return this.orderService.findOrderUser(req.user.userId, orderCode);
  }

  @UseGuards(JwtAuthGuard)
  @Post('return-item-request')
  async createReturnItemRequest(
    @Req() req: Request & { user: any },
    @Body() dto: CreateReturnRequestDto,
  ) {
    return this.orderService.returnItemRequest(req.user.userId, dto);
  }
}
