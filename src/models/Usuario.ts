import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm"

@Entity( 'usuario')
class usuario {

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    nome:string;

    @Column()
    password: string

    @UpdateDateColumn()
    criado_at: Date;

    @UpdateDateColumn()
    atualizado_at: Date;
}

export default usuario;