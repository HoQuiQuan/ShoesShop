import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryQueryDto } from './dto/inventory-query.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/common/guards/role.guard';
import { Roles } from 'src/common/decorator/role.decorator';
import { StockInDto } from './dto/stock-in.dto';
import { FindReturnRequestDto } from './dto/find-return-request.dto';
import { CompleteReturnItemDto } from './dto/completeReturnItem.dto';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('ADMIN')
  @Get()
  async findAllInventory(@Query() query: InventoryQueryDto) {
    return this.inventoryService.findAllInventory(query);
  }

  @Get('return-request')
  async getAllReturnRequest(
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    return this.inventoryService.findAllReturnRequest(page, limit);
  }

  @Get('admin/return')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('ADMIN')
  async findAllAdmin(@Query() dto: FindReturnRequestDto) {
    return this.inventoryService.findAllAdmin(dto);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('ADMIN')
  @Post('stock-in')
  async stockIn(@Body() dto: StockInDto) {
    return this.inventoryService.stockIn(dto);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('ADMIN')
  @Post('stock-out')
  async stockOut(@Body() dto: StockInDto) {
    return this.inventoryService.stockOut(dto);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('ADMIN')
  @Patch('admin/approve-return/:id')
  async approveReturn(@Param('id') id: number) {
    return this.inventoryService.approveReturn(+id);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('ADMIN')
  @Patch('admin/shipping-return/:id')
  async shippingReturn(@Param('id') id: number) {
    return this.inventoryService.shippingReturn(+id);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('ADMIN')
  @Patch('admin/receive-return/:id')
  async receiveReturn(@Param('id') id: number) {
    return this.inventoryService.receiveReturn(+id);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('ADMIN')
  @Patch('admin/inspecting-return/:id')
  async inspectingReturn(@Param('id') id: number) {
    return this.inventoryService.inspectReturn(+id);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('ADMIN')
  @Patch('admin/reject-return/:id')
  async rejectReturn(@Param('id') id: number) {
    return this.inventoryService.rejectReturn(id);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('ADMIN')
  @Patch('admin/complete-return/:id')
  async completeReturnItem(
    @Body() dto: CompleteReturnItemDto,
    @Param('id') id: number,
  ) {
    return this.inventoryService.completeReturnItem(id, dto);
  }
}
