import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Users_typesDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async list() {
    const users = await this.prisma.users.findMany({
      orderBy: {
        name: 'asc',
      },
    });

    // if (courseTypes.length === 0)
    //   throw new NotFoundException('No course types were found');

    return users;
  }

  async create(data: Users_typesDto) {
    const newUser = await this.prisma.users.create({ data });

    return newUser;
  }
}
