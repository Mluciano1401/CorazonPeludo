import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { SolicitudR } from "./solicitudRescate.model";
import { Estado } from "../miscelaneo/estado.model";


@Entity({ schema: 'rescate', name: 'mision' })
export class Mision{
    @PrimaryGeneratedColumn()
    misionId: number;

    @Column()
    fechaInicio: Date;

    @ManyToOne(()=> SolicitudR)
    @JoinColumn()
    solicitud: SolicitudR;

    @ManyToOne(()=> Estado)
    @JoinColumn()
    estado: Estado;

    @Column({ nullable: false,  default: new Date() })
    fechaModificacion: Date;

    @Column({ nullable: false, default: true })
    status:boolean;
}

