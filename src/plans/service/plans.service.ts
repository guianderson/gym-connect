import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlanDto } from '../dto/create-plan.dto';
import { Plans } from '../entity/plans.entity';

@Injectable()
export class PlansService {

    constructor(
        @InjectRepository(Plans)
        private readonly plansRepository: Repository<Plans>,
    ) {}

    async create(createPlanDto: CreatePlanDto): Promise<Plans> {
        const plan = this.plansRepository.create(createPlanDto);
        return this.plansRepository.save(plan);
    }

    findAll(): Promise<Plans[]> {
        return this.plansRepository.find();
    }

    async findOne(id: number): Promise<Plans> {
        const plan = await this.plansRepository.findOne({ where: { id } });
        if (!plan) {
            throw new Error(`Plan with id ${id} not found`);
        }
        return plan;
    }

}