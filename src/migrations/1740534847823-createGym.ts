import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateGym1740534847823 implements MigrationInterface {
    name = 'CreateGym1740534847823'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "gym" ADD "cnpj" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "gym" ADD "neighborhood" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "gym" DROP COLUMN "neighborhood"`);
        await queryRunner.query(`ALTER TABLE "gym" DROP COLUMN "cnpj"`);
    }

}
