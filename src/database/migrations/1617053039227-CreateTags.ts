import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTags1617053039227 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tags',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid'
                    }, {
                        name: 'name',
                        type: 'varchar',
                    
                    }, {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            }))}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tags')
    }

}
