import { Module } from '@nestjs/common';
import { PlansService } from './service/plans.service';
import { PlansController } from './controller/plans.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plans } from './entity/plans.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Plans])],
  controllers: [PlansController],
  providers: [PlansService],
  exports: [PlansService],
})
export class PlansModule {}