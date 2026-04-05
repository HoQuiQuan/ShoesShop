import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CartDto } from 'src/dto/cart.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CartService {
  constructor(private prismaService: PrismaService) {}
  async getCart(cartDto: CartDto) {
    const id: number = cartDto.id;
    const cart = await this.prismaService.cart.findFirst({
      where: {
        customerId: id,
      },
    });
    if (!cart) {
      throw new UnauthorizedException('gio hang hoac user khong ton tai');
    }
    const cartItems = await this.prismaService.cartItems.findMany({
      where: {
        cartId: cart.id,
      },
    });
    const productDetail = await cartItems.find({
      relations: [''],
    });
  }
}
