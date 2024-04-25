import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Sucursal } from "../tercero/surcusal.model";
import { Estado } from "../miscelaneo/estado.model";
import { Solicitante } from "./solicitante.model";

@Entity( )
export class Solicitud {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=> Solicitante)
    @JoinColumn()
    solicitante: Solicitante;

    @ManyToOne(()=> Estado)
    @JoinColumn()
    estado: Estado;

    @Column({ nullable: true})
    fechaCreacion: Date;

    @ManyToOne(()=> Sucursal)
    @JoinColumn()
    surcusal: Sucursal;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}