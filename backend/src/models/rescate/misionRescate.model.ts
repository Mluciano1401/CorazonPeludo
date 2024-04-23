import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { SolicitudR } from "./solicitudRescate.model";
import { Estado } from "../miscelaneo/estado.model";


@Entity( )
export class Mision{
    @PrimaryGeneratedColumn()
    misionId: number;

    @Column({ nullable: true})
    fechaInicio: Date;

    @ManyToOne(()=> SolicitudR)
    @JoinColumn()
    solicitud: SolicitudR;

    @ManyToOne(()=> Estado)
    @JoinColumn()
    estado: Estado;

    @Column({ nullable: false})
    fechaModificacion: Date;

    @Column({ nullable: false, default: true })
    status:boolean;
}

