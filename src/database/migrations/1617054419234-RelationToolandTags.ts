import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationToolandTags1617054419234 implements MigrationInterface {
    name = 'RelationToolandTags1617054419234'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tags" ADD "toolId" character varying`);
        await queryRunner.query(`ALTER TABLE "tags" ADD CONSTRAINT "FK_85f9ea75b4429782ff0bdaaa74f" FOREIGN KEY ("toolId") REFERENCES "tools"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tags" DROP CONSTRAINT "FK_85f9ea75b4429782ff0bdaaa74f"`);
        await queryRunner.query(`ALTER TABLE "tags" DROP COLUMN "toolId"`);
    }

}
