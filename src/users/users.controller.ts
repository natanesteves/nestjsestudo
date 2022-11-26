import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Users_typesDto } from './dto/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async list() {
    return await this.usersService.list();
  }

  @Post()
  async send(@Body() data: Users_typesDto) {
    return this.usersService.create(data);
  }
}
