import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: 'miscelaneo', name: 'direccion' })
export class Direccion{
    @PrimaryGeneratedColumn()
    direccionId: number;

    @Column({ nullable: false })
    calle: string;

    @Column({ nullable: false })
    sector: string;

    @Column({ nullable: false,  default: new Date() })
    fechaModificacion: Date;

    @Column({ nullable: false, default: true })
    status:boolean;
}

