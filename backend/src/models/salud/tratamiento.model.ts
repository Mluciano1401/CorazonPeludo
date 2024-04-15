import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoTratamiento } from "./tipoTratamiento.model";

@Entity( )
export class Tratamiento{
    @PrimaryGeneratedColumn()
    tratamientoId: number;

    @Column({ nullable: false })
    descripcion: string;

    @ManyToOne(() => TipoTratamiento)
    @JoinColumn()
    tipoTratamiento: TipoTratamiento;

    @Column({ nullable: false})
    fechaModificacion: Date;

    @Column({ nullable: false, default: true })
    status:boolean;
}

