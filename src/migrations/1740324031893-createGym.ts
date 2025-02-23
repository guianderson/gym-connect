import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateGym1740324031893 implements MigrationInterface {
    name = 'CreateGym1740324031893'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "gym" ADD "image" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "gym" DROP CONSTRAINT "FK_971c2854095a29d85c55d34d563"`);
        await queryRunner.query(`ALTER TABLE "gym" ALTER COLUMN "planId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "gym" ADD CONSTRAINT "FK_971c2854095a29d85c55d34d563" FOREIGN KEY ("planId") REFERENCES "plans"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "gym" DROP CONSTRAINT "FK_971c2854095a29d85c55d34d563"`);
        await queryRunner.query(`ALTER TABLE "gym" ALTER COLUMN "planId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "gym" ADD CONSTRAINT "FK_971c2854095a29d85c55d34d563" FOREIGN KEY ("planId") REFERENCES "plans"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gym" DROP COLUMN "image"`);
    }

}
