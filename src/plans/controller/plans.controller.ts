import { Body, Controller, Param, Patch, Post, Put } from '@nestjs/common';
import { PlansService } from '../service/plans.service';
import { CreatePlanDto } from '../dto/create-plan.dto';
import { Plans } from '../entity/plans.entity';
import { UpdatePlanDto } from '../dto/update-plan.dto';

@Controller('plans')
export class PlansController {
  constructor(private readonly plansService: PlansService) {}

  @Post()
  create(@Body() createPlanDto: CreatePlanDto): Promise<Plans> {
    return this.plansService.create(createPlanDto);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updatePlanDto: UpdatePlanDto,
  ): Promise<Plans> {
    return this.plansService.update(id, updatePlanDto);
  }
}
