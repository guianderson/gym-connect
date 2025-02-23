import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateGym1740319256966 implements MigrationInterface {
    name = 'CreateGym1740319256966'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "plans" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "price" integer NOT NULL, "status" boolean NOT NULL, "duration" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_3720521a81c7c24fe9b7202ba61" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "gym" DROP COLUMN "address"`);
        await queryRunner.query(`ALTER TABLE "gym" ADD "zipCode" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "gym" ADD "street" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "gym" ADD "city" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "gym" ADD "state" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "gym" ADD "number" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "gym" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "gym" ADD "status" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "gym" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "gym" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "gym" ADD "deleted_at" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "gym" ADD "planId" integer`);
        await queryRunner.query(`ALTER TABLE "gym" ADD CONSTRAINT "FK_971c2854095a29d85c55d34d563" FOREIGN KEY ("planId") REFERENCES "plans"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "gym" DROP CONSTRAINT "FK_971c2854095a29d85c55d34d563"`);
        await queryRunner.query(`ALTER TABLE "gym" DROP COLUMN "planId"`);
        await queryRunner.query(`ALTER TABLE "gym" DROP COLUMN "deleted_at"`);
        await queryRunner.query(`ALTER TABLE "gym" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "gym" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "gym" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "gym" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "gym" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "gym" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "gym" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "gym" DROP COLUMN "street"`);
        await queryRunner.query(`ALTER TABLE "gym" DROP COLUMN "zipCode"`);
        await queryRunner.query(`ALTER TABLE "gym" ADD "address" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "plans"`);
    }

}
