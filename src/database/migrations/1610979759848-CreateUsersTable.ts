import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsersTable1610979759848 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

        await queryRunner.createTable(new Table({
            name:'users',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary:true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'nome',
                    type: 'varchar',
                    isUnique:true,
                },
                {
                    name: 'password',
                    type: 'varchar',
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropDatabase('users');
        await queryRunner.query('DROP EXTENSION "uuid-ossp"');
    }

}
