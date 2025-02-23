import { Body, Controller, Post } from '@nestjs/common';
import { PlansService } from '../service/plans.service';
import { CreatePlanDto } from '../dto/create-plan.dto';
import { Plans } from '../entity/plans.entity';

@Controller('plans')
export class PlansController {
    constructor(private readonly plansService: PlansService) {}

    @Post()
    create(@Body() createPlanDto: CreatePlanDto): Promise<Plans> {
        return this.plansService.create(createPlanDto);
    }

}