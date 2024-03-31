import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Sucursal } from "../tercero/surcusal.model";
import { Estado } from "../miscelaneo/estado.model";
import { Solicitante } from "./solicitante.model";

@Entity( )
export class Solicitud {
    @PrimaryGeneratedColumn()
    SolicitudId: number;

    @OneToOne(()=> Solicitante)
    @JoinColumn()
    solicitante: Solicitante;

    @OneToOne(()=> Estado)
    @JoinColumn()
    estado: Estado;

    @Column()
    fechaCreacion: Date;

    @OneToOne(()=> Sucursal)
    @JoinColumn()
    surcusal: Sucursal;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}