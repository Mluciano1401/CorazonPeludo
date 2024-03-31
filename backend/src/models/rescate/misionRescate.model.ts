import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { SolicitudR } from "./solicitudRescate.model";
import { Estado } from "../miscelaneo/estado.model";


@Entity( )
export class Mision{
    @PrimaryGeneratedColumn()
    misionId: number;

    @Column()
    fechaInicio: Date;

    @OneToOne(()=> SolicitudR)
    @JoinColumn()
    solicitud: SolicitudR;

    @OneToOne(()=> Estado)
    @JoinColumn()
    estado: Estado;

    @Column({ nullable: false})
    fechaModificacion: Date;

    @Column({ nullable: false, default: true })
    status:boolean;
}

