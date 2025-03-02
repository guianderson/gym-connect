import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveTeachersAndAStudents1740945876221 implements MigrationInterface {
    name = 'RemoveTeachersAndAStudents1740945876221'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "workout" DROP CONSTRAINT "FK_f4abeb73826f4a633625ec97c61"`);
        await queryRunner.query(`ALTER TABLE "workout" DROP CONSTRAINT "FK_6d45a4c296ea148b5f0a266a821"`);
        await queryRunner.query(`ALTER TABLE "workout" DROP COLUMN "teacherId"`);
        await queryRunner.query(`ALTER TABLE "workout" DROP COLUMN "studentId"`);
        await queryRunner.query(`ALTER TABLE "gym" ADD CONSTRAINT "UQ_e1d5646e95b8b61cf7d0f627beb" UNIQUE ("cnpj")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "gym" DROP CONSTRAINT "UQ_e1d5646e95b8b61cf7d0f627beb"`);
        await queryRunner.query(`ALTER TABLE "workout" ADD "studentId" integer`);
        await queryRunner.query(`ALTER TABLE "workout" ADD "teacherId" integer`);
        await queryRunner.query(`ALTER TABLE "workout" ADD CONSTRAINT "FK_6d45a4c296ea148b5f0a266a821" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "workout" ADD CONSTRAINT "FK_f4abeb73826f4a633625ec97c61" FOREIGN KEY ("teacherId") REFERENCES "teacher"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
