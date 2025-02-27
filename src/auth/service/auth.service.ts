import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { GymsService } from 'src/gyms/service/gyms.service';
import { SignInDto } from '../dto/signIn.dto';
import { validatePassword } from 'src/utils/encryptPass';

@Injectable()
export class AuthService {
  constructor(
    private readonly gymsService: GymsService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto): Promise<{ accessToken: string }> {
    const { email, password } = signInDto;

    const gym = await this.gymsService.findByEmail(email);
    if (!gym) {
      throw new UnauthorizedException('User not found');
    }

    const isPasswordValid = await validatePassword(password, gym.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid user or password');
    }

    const payload = { sub: gym.id, email: gym.email };
    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }
}
