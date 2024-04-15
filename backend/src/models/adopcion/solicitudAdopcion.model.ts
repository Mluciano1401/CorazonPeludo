import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Sucursal } from "../tercero/surcusal.model";
import { Estado } from "../miscelaneo/estado.model";
import { Solicitante } from "./solicitante.model";

@Entity( )
export class Solicitud {
    @PrimaryGeneratedColumn()
    SolicitudId: number;

    @ManyToOne(()=> Solicitante)
    @JoinColumn()
    solicitante: Solicitante;

    @ManyToOne(()=> Estado)
    @JoinColumn()
    estado: Estado;

    @Column()
    fechaCreacion: Date;

    @ManyToOne(()=> Sucursal)
    @JoinColumn()
    surcusal: Sucursal;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}