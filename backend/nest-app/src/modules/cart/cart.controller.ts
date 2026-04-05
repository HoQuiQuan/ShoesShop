import { Controller } from '@nestjs/common';
import { CartDto } from 'src/dto/cart.dto';

@Controller('cart')
export class CartController {
  cartDto: CartDto;
}
