import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsers1740946766523 implements MigrationInterface {
    name = 'CreateUsers1740946766523'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "cpf" character varying NOT NULL, "zipCode" character varying NOT NULL, "street" character varying NOT NULL, "neighborhood" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "number" character varying NOT NULL, "phone" character varying NOT NULL, "email" character varying NOT NULL, "status" boolean NOT NULL, "image" text NOT NULL, "password" character varying NOT NULL, "userType" character varying NOT NULL, "gymId" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
