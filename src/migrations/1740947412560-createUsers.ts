import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsers1740947412560 implements MigrationInterface {
    name = 'CreateUsers1740947412560'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_c2eb2f3b7991ab4186947ebf6ad" FOREIGN KEY ("gymId") REFERENCES "gym"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_c2eb2f3b7991ab4186947ebf6ad"`);
    }

}
