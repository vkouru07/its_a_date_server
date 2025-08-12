import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { FirebaseService } from './firebase.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private firebaseService: FirebaseService
  ) {}

  async authenticateUser(credentials: any) {
    const user = await this.firebaseService.validateOrCreateUser(credentials);
    // const accessToken = this.jwtService.sign({ sub: user.id }, { expiresIn: '15m' });
    // const refreshToken = this.jwtService.sign({ sub: user.id }, { expiresIn: '30d' });
    // return { accessToken, refreshToken, user };
  }

  async login(credentials: any) {}
  async register(data: any) {}
  async logout(userId: string) {}
  async refreshSession(userId: string) {}
  async verifyIdentity(data: any) {}
}
