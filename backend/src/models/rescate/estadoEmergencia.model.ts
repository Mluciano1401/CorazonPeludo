import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: 'rescate', name: 'estadoEmergencia' })
export class EstadoEmergencia{
    @PrimaryGeneratedColumn()
    estadoEmergenciaId: number;

    @Column({ nullable: false })
    descripcion: string;

    @Column({ nullable: false,  default: new Date() })
    fechaModificacion: Date;

    @Column({ nullable: false, default: true })
    status:boolean;
}

