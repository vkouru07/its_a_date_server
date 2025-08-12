import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async getUserProfile(id: string) {}
  async updateUserProfile(id: string, data: any) {}
  async updateAvailability(id: string, blocks: any) {}
  async deleteUser(id: string) {}
}
