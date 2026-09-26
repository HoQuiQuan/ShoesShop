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
} from '@nestjs/common';

import { VouchersService } from './vouchers.service';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { UpdateVoucherDto } from './dto/update-voucher.dto';
import { ApplicableVoucherDto } from './dto/applicable-voucher.dto';
import { JwtAuthGuard } from '../auth/guards/accessToken.guard';

@Controller('vouchers')
export class VouchersController {
  constructor(private readonly vouchersService: VouchersService) {}

  @Post()
  async create(@Body() createVoucherDto: CreateVoucherDto) {
    return this.vouchersService.create(createVoucherDto);
  }

  @Get()
  async findAll() {
    return this.vouchersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('user/:voucherId')
  async addVoucherUser(@Req() req: any, @Param('voucherId') voucherId: string) {
    return this.vouchersService.addVoucherUser(
      req.user.userId,
      Number(voucherId),
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get('my-vouchers')
  async findAllVoucherUser(@Req() req: any) {
    return this.vouchersService.findManyVoucherUser(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('applicable')
  async findApplicableVouchers(
    @Req() req: any,
    @Body() dto: ApplicableVoucherDto,
  ) {
    return this.vouchersService.findApplicableVouchers(req.user.userId, dto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.vouchersService.findOne(Number(id));
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateVoucherDto: UpdateVoucherDto,
  ) {
    return this.vouchersService.update(Number(id), updateVoucherDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.vouchersService.remove(Number(id));
  }

  @Get('find/all')
  async findAllVouchers() {
    return this.vouchersService.findAllVoucherAdmin();
  }
  @Get('findUser/all')
  async findAllVoucherUsers() {
    return this.vouchersService.findAllVoucherUser();
  }
}
