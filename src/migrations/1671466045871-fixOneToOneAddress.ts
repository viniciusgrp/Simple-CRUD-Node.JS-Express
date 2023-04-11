import { MigrationInterface, QueryRunner } from "typeorm";

export class fixOneToOneAddress1671466045871 implements MigrationInterface {
    name = 'fixOneToOneAddress1671466045871'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ADD "propertyId" uuid`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "UQ_773ac16442ec27042d735ac88b8" UNIQUE ("propertyId")`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "FK_773ac16442ec27042d735ac88b8" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "FK_773ac16442ec27042d735ac88b8"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "UQ_773ac16442ec27042d735ac88b8"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "propertyId"`);
    }

}
