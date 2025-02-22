import { Module } from '@nestjs/common';
import { StudentsService } from './service/students.service';
import { StudentsController } from './controller/students.controller';

@Module({
  imports: [],
  controllers: [StudentsController],
  providers: [StudentsService],
  exports: [StudentsService],
})
export class Students {}