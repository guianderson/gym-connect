import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateGym1739925263571 implements MigrationInterface {
    name = 'CreateGym1739925263571'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "gym" ("id" character varying NOT NULL, "name" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "street" character varying NOT NULL, "neighborhood" character varying NOT NULL, "number" character varying NOT NULL, "zipcode" character varying NOT NULL, "phone" character varying NOT NULL, "email" character varying NOT NULL, "website" character varying NOT NULL, "description" character varying NOT NULL, "gymImage" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_5ec4eaae24cb81794abbd1af787" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "gym"`);
    }

}
