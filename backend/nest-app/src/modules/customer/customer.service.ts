import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CustomerService {
  constructor(private prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.customers.findMany();
  }
}
