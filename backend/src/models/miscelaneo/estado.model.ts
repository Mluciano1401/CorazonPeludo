import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: 'miscelaneo', name: 'estado' })
export class Estado{
    @PrimaryGeneratedColumn()
    estadoId: number;

    @Column({ nullable: false })
    descripcion: string;

    @Column({ nullable: false,  default: new Date() })
    fechaModificacion: Date;

    @Column({ nullable: false, default: true })
    status:boolean;
}

