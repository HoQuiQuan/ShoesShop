import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { makeSlugFromString } from '../category/helpers.util';

@Injectable()
export class SlugService {
  constructor(private prisma: PrismaService) {}

  async generateUniqueSlug(
    name: string,
    model: 'category' | 'product',
  ): Promise<string> {
    const baseSlug = makeSlugFromString(name);
    let slug = baseSlug;
    let count = 1;

    while (true) {
      const existing = await this.checkSlugExists(slug, model);

      if (!existing) break;

      slug = `${baseSlug}-${count}`;
      count++;
    }

    return slug;
  }

  private async checkSlugExists(slug: string, model: string) {
    switch (model) {
      case 'category':
        return this.prisma.categories.findUnique({ where: { slug } });

      case 'product':
        return this.prisma.products.findUnique({ where: { slug } });

      default:
        return null;
    }
  }
}
