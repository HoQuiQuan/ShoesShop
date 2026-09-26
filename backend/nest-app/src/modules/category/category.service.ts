import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { PrismaService } from 'src/prisma.service';
import { SlugService } from '../slug/slug';

@Injectable()
export class CategoryService {
  constructor(
    private prismaService: PrismaService,
    private slugService: SlugService,
  ) {}
  async create(createCategoryDto: CreateCategoryDto) {
    const slug = await this.slugService.generateUniqueSlug(
      createCategoryDto.name,
      'category',
    );
    console.log(slug);
    let IsSlugExist: any;
    if (createCategoryDto.parentId == null) {
      IsSlugExist = await this.prismaService.categories.findUnique({
        where: {
          slug,
        },
      });

      if (IsSlugExist) {
        throw new ConflictException('Category already exists');
      }
    } else {
      IsSlugExist = await this.prismaService.categories.findUnique({
        where: {
          id: createCategoryDto.parentId,
        },
      });

      if (!IsSlugExist) {
        throw new ConflictException('Category already exists');
      }
    }

    const res = await this.prismaService.categories.create({
      data: {
        name: createCategoryDto.name,
        slug,
        parentId: createCategoryDto?.parentId,
      },
    });

    return res;
  }

  async findAll() {
    const res = await this.prismaService.categories.findMany({
      where: {
        status: 'ACTIVE',
        parentId: null,
      },
      include: {
        children: true,
      },
    });
    console.log(res);
    return res;
  }

  async update(id: number, newNameCategory: string) {
    const category = await this.prismaService.categories.findFirst({
      where: { id },
    });

    if (!category) {
      throw new NotFoundException('Category không tồn tại');
    }

    if (!newNameCategory) {
      throw new BadRequestException('Name không được rỗng');
    }

    if (newNameCategory === category.name) {
      return {
        message: 'Không có thay đổi',
        data: category,
      };
    }

    const exist = await this.prismaService.categories.findFirst({
      where: { name: newNameCategory },
    });

    if (exist) {
      throw new BadRequestException('Tên category đã tồn tại');
    }

    const slug = await this.slugService.generateUniqueSlug(
      newNameCategory,
      'category',
    );

    const updated = await this.prismaService.categories.update({
      where: { id },
      data: {
        name: newNameCategory,
        slug,
      },
    });

    return {
      message: 'Update thành công',
      data: updated,
    };
  }

  async remove(id: number) {
    const category = await this.prismaService.categories.findUnique({
      where: { id },
    });

    if (!category) {
      throw new NotFoundException('Category không tồn tại');
    }

    return this.prismaService.$transaction(async (tx) => {
      const hasOrder = await tx.orderDetails.findFirst({
        where: {
          productDetail: {
            product: {
              categoryId: id,
            },
          },
        },
      });

      if (hasOrder) {
        throw new BadRequestException(
          'Không thể xóa category vì đã có đơn hàng',
        );
      }

      await tx.cartItems.deleteMany({
        where: {
          productDetail: {
            product: {
              categoryId: id,
            },
          },
        },
      });

      await tx.comments.deleteMany({
        where: {
          product: {
            categoryId: id,
          },
        },
      });

      await tx.categories.delete({
        where: { id },
      });

      return { message: 'success' };
    });
  }
}
