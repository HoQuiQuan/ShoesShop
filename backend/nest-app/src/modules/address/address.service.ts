import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AddressService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: number, createAddressDto: CreateAddressDto) {
    const user = await this.prisma.users.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new UnauthorizedException('ID user không hợp lệ');
    }

    try {
      const newAddress = await this.prisma.$transaction(async (tx) => {
        if (createAddressDto.isDefault) {
          await tx.address.updateMany({
            where: {
              userId,
              isDefault: true,
            },
            data: {
              isDefault: false,
            },
          });
        }

        const addressNew = await tx.address.create({
          data: {
            userId,
            ...createAddressDto,
          },
        });
        return addressNew;
      });
      return newAddress;
    } catch (error) {
      throw new InternalServerErrorException('Lỗi database');
    }
  }

  async findAll(userId: number) {
    try {
      const address = await this.prisma.address.findMany({
        where: {
          userId,
        },
      });
      if (address.length == 0)
        throw new UnauthorizedException('Người dùng không tồn tại');
      return address;
    } catch (error) {
      throw new InternalServerErrorException('Lỗi database');
    }
  }

  async update(userId: number, id: number, updateAddressDto: UpdateAddressDto) {
    const user = await this.prisma.users.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
      },
    });

    if (!user) throw new UnauthorizedException('Người dùng không tồn tại');

    try {
      const updatedAddress = await this.prisma.$transaction(async (tx) => {
        if (updateAddressDto.isDefault) {
          await tx.address.updateMany({
            where: {
              userId,
              isDefault: true,
            },
            data: {
              isDefault: false,
            },
          });
        }

        const updateAddress = await tx.address.update({
          where: {
            id,
            userId,
          },
          data: {
            userId,
            ...updateAddressDto,
          },
        });
        return updateAddress;
      });
      return updatedAddress;
    } catch (error) {
      throw new InternalServerErrorException('Lỗi database');
    }
  }

  async remove(userId: number, id: number) {
    const user = await this.prisma.users.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Người dùng không tồn tại');
    }

    try {
      const address = await this.prisma.address.findFirst({
        where: {
          id,
          userId,
        },
      });

      if (!address) {
        throw new BadRequestException('Địa chỉ không tồn tại');
      }

      await this.prisma.address.delete({
        where: {
          id,
        },
      });

      return {
        message: 'Xóa địa chỉ thành công',
      };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }

      throw new InternalServerErrorException('Lỗi database');
    }
  }
}
