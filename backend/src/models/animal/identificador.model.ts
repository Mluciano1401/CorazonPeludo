import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Indentificador{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    codigoBarra: string;

    @Column({ nullable: true})
    tipoIdentificador: string;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

