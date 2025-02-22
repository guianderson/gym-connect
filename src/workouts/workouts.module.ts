import { Module } from '@nestjs/common';
import { WorkoutsService } from './service/workouts.service';
import { WorkoutsController } from './controller/workouts.controller';

@Module({
  imports: [],
  controllers: [WorkoutsController],
  providers: [WorkoutsService],
  exports: [WorkoutsService],
})
export class Workouts {}