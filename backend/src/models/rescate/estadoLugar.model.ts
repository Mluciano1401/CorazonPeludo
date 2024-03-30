import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: 'rescate', name: 'estadoLugar' })
export class EstadoLugar{
    @PrimaryGeneratedColumn()
    estadoLugarId: number;

    @Column({ nullable: false })
    descripcion: string;

    @Column({ nullable: false,  default: new Date() })
    fechaModificacion: Date;

    @Column({ nullable: false, default: true })
    status:boolean;
}

