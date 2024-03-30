import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: 'animal', name: 'indentificador' })
export class Indentificador{
    @PrimaryGeneratedColumn()
    indentificadorId: number;

    @Column({ nullable: false })
    codigoBarra: string;

    @Column()
    tipoIdentificador: string;

  @Column({ nullable: false,  default: new Date() })
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

