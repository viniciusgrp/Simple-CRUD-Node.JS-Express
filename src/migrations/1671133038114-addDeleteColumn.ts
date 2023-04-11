import { MigrationInterface, QueryRunner } from "typeorm";

export class addDeleteColumn1671133038114 implements MigrationInterface {
    name = 'addDeleteColumn1671133038114'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
    }

}
