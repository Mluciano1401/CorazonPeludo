import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: 'miscelaneo', name: 'complejidad' })
export class Complejidad{
    @PrimaryGeneratedColumn()
    complejidadId: number;

    @Column({ nullable: false })
    descripcion: string;

    @Column({ nullable: false,  default: new Date() })
    fechaModificacion: Date;

    @Column({ nullable: false, default: true })
    status:boolean;
}

