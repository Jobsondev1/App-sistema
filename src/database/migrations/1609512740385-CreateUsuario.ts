import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateUsuario1609512740385 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'usuarios',
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
                },
                {
                    name: 'password',
                    type: 'varchar',
                },
            {
                name: 'criado_at',
                type: 'timestamp',
                default: 'now()'
            },
            {
                name: 'atualizado_at',
                type: 'timestamp',
                default: 'now()'
            },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropDatabase('usuarios')
    }

}
