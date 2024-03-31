import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Indentificador{
    @PrimaryGeneratedColumn()
    indentificadorId: number;

    @Column({ nullable: false })
    codigoBarra: string;

    @Column()
    tipoIdentificador: string;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

