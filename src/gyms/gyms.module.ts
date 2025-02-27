import { Module } from '@nestjs/common';
import { GymsService } from './service/gyms.service';
import { GymsController } from './controller/gyms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gym } from './entities/gym.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Gym])],
  controllers: [GymsController],
  providers: [GymsService],
  exports: [GymsService],
})
export class GymsModule {}
