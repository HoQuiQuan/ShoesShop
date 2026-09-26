import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { UpdateVoucherDto } from './dto/update-voucher.dto';
import { PrismaService } from 'src/prisma.service';
import { ApplicableVoucherDto } from './dto/applicable-voucher.dto';

@Injectable()
export class VouchersService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createVoucherDto: CreateVoucherDto) {
    const existedCode = await this.prisma.vouchers.findUnique({
      where: {
        code: createVoucherDto.code,
      },
      select: {
        id: true,
      },
    });

    if (existedCode) {
      throw new ConflictException('Mã voucher đã tồn tại');
    }

    try {
      const newVoucher = await this.prisma.vouchers.create({
        data: {
          code: createVoucherDto.code,
          voucherType: createVoucherDto.voucherType,
          discountType: createVoucherDto.discountType,
          discountValue: createVoucherDto.discountValue,
          maxDiscount: createVoucherDto.maxDiscount,
          minOrderValue: createVoucherDto.minOrderValue,
          description: createVoucherDto.description,
          usageLimit: createVoucherDto.usageLimit,
          startAt: createVoucherDto.startAt,
          endAt: createVoucherDto.endAt,
        },
      });

      return newVoucher;
    } catch (error) {
      throw new InternalServerErrorException('Lỗi database');
    }
  }

  async findAll() {
    try {
      const vouchers = await this.prisma.vouchers.findMany({
        where: {
          isActive: true,
        },
      });
      return vouchers;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findOne(id: number) {
    try {
      const vouncher = await this.prisma.vouchers.findUnique({
        where: {
          id,
        },
      });

      return vouncher;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async update(id: number, updateVoucherDto: UpdateVoucherDto) {
    try {
      const existedVoucher = await this.prisma.vouchers.findUnique({
        where: {
          id,
        },
      });

      if (!existedVoucher) {
        throw new BadRequestException('không có voucher để update');
      }

      const updatedVoucher = await this.prisma.vouchers.update({
        where: {
          id,
        },
        data: {
          ...updateVoucherDto,
        },
      });

      return updatedVoucher;
    } catch (error) {
      throw new InternalServerErrorException('Lỗi database');
    }
  }

  async remove(id: number) {
    const existedVoucher = await this.prisma.vouchers.findUnique({
      where: {
        id,
      },
    });
    if (!existedVoucher) {
      throw new BadRequestException('Voucher không tồn tại để xóa');
    }
    try {
      await this.prisma.vouchers.update({
        where: {
          id,
        },
        data: {
          isActive: false,
        },
      });

      return { message: 'success' };
    } catch (error) {
      throw new InternalServerErrorException('Lỗi database');
    }
  }

  async addVoucherUser(userId: number, voucherId: number) {
    try {
      const voucher = await this.prisma.vouchers.findUnique({
        where: {
          id: voucherId,
        },
      });

      // Voucher không tồn tại
      if (!voucher) {
        throw new NotFoundException('Voucher không tồn tại');
      }

      // Voucher bị vô hiệu hóa
      if (!voucher.isActive) {
        throw new BadRequestException('Voucher không hoạt động');
      }

      // Voucher het luot su dung
      if (voucher.usageLimit && voucher.usedCount >= voucher.usageLimit) {
        throw new BadRequestException('Voucher đã hết lượt sử dụng');
      }

      // Voucher đã hết hạn
      if (voucher.endAt < new Date()) {
        throw new BadRequestException('Voucher đã hết hạn');
      }

      const existedVoucherUser = await this.prisma.vouchers_User.findFirst({
        where: {
          userId,
          voucherId,
        },
      });

      if (existedVoucherUser) {
        throw new ConflictException('Voucher này bạn đã lưu');
      }

      const newVoucherUser = await this.prisma.vouchers_User.create({
        data: {
          userId,
          voucherId,
        },
      });

      return newVoucherUser;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Lỗi database');
    }
  }

  async findManyVoucherUser(userId: number) {
    try {
      const voucherUsers = await this.prisma.vouchers_User.findMany({
        where: {
          userId,
          voucher: {
            isActive: true,
          },
        },
        select: {
          id: true,
          userId: true,
          voucher: true,
        },
      });
      return voucherUsers;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Lỗi database');
    }
  }

  async findApplicableVouchers(userId: number, dto: ApplicableVoucherDto) {
    try {
      const now = new Date();

      const voucherUsers = await this.prisma.vouchers_User.findMany({
        where: {
          userId,

          voucher: {
            isActive: true,
            voucherType: dto.voucherType,

            startAt: {
              lte: now,
            },

            endAt: {
              gt: now,
            },
          },

          isUsed: false,
        },

        select: {
          voucher: true,
        },
      });

      const applicableVouchers = voucherUsers
        .filter((voucherUser) => {
          const voucher = voucherUser.voucher;

          const isOrderValueValid =
            voucher.minOrderValue === null ||
            Number(voucher.minOrderValue) <= dto.orderPrice;

          const isUsageValid =
            voucher.usageLimit === null ||
            voucher.usedCount < voucher.usageLimit;

          return isOrderValueValid && isUsageValid;
        })
        .map((voucherUser) => voucherUser.voucher);

      return applicableVouchers;
    } catch (error) {
      console.log(error);

      throw new InternalServerErrorException('Không thể lấy voucher áp dụng');
    }
  }

  // ADMIN + USER
  async findAllVoucherAdmin() {
    try {
      const vouchers = await this.prisma.vouchers.findMany();
      return vouchers;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findAllVoucherUser() {
    try {
      const vouchers = await this.prisma.vouchers.findMany({
        where: {
          isActive: true,
        },
      });
      return vouchers;
    } catch (error) {
      throw new InternalServerErrorException('Loi database');
    }
  }
}
