import { Controller, Get, Patch, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getProfile(@Request() req) {
    return this.usersService.getUserProfile(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('me')
  async updateProfile(@Request() req, @Body() dto: UpdateUserDto) {
    return this.usersService.updateUserProfile(req.user.id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('me')
  async deleteAccount(@Request() req) {
    return this.usersService.deleteUser(req.user.id);
  }
}
