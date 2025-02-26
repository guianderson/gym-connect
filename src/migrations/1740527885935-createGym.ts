import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateGym1740527885935 implements MigrationInterface {
    name = 'CreateGym1740527885935'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "gym" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "gym" DROP COLUMN "password"`);
    }

}
