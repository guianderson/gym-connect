import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateGym1740261633556 implements MigrationInterface {
    name = 'CreateGym1740261633556'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "student" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "academyId" integer, "teacherId" integer, CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "workout" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "teacherId" integer, "studentId" integer, CONSTRAINT "PK_ea37ec052825688082b19f0d939" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "teacher" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "gymId" integer, CONSTRAINT "PK_2f807294148612a9751dacf1026" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "gym" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "address" character varying NOT NULL, "phone" character varying NOT NULL, CONSTRAINT "PK_5ec4eaae24cb81794abbd1af787" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "FK_4c00864b998e070b52472ebd864" FOREIGN KEY ("academyId") REFERENCES "gym"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "FK_f4481746c56ffa6cf77829a4bcc" FOREIGN KEY ("teacherId") REFERENCES "teacher"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "workout" ADD CONSTRAINT "FK_f4abeb73826f4a633625ec97c61" FOREIGN KEY ("teacherId") REFERENCES "teacher"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "workout" ADD CONSTRAINT "FK_6d45a4c296ea148b5f0a266a821" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "teacher" ADD CONSTRAINT "FK_13b2b8d91e5aed3682b39c8440d" FOREIGN KEY ("gymId") REFERENCES "gym"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teacher" DROP CONSTRAINT "FK_13b2b8d91e5aed3682b39c8440d"`);
        await queryRunner.query(`ALTER TABLE "workout" DROP CONSTRAINT "FK_6d45a4c296ea148b5f0a266a821"`);
        await queryRunner.query(`ALTER TABLE "workout" DROP CONSTRAINT "FK_f4abeb73826f4a633625ec97c61"`);
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "FK_f4481746c56ffa6cf77829a4bcc"`);
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "FK_4c00864b998e070b52472ebd864"`);
        await queryRunner.query(`DROP TABLE "gym"`);
        await queryRunner.query(`DROP TABLE "teacher"`);
        await queryRunner.query(`DROP TABLE "workout"`);
        await queryRunner.query(`DROP TABLE "student"`);
    }

}
