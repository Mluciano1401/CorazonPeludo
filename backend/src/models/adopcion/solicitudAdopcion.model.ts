import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Sucursal } from "../tercero/surcusal.model";
import { Estado } from "../miscelaneo/estado.model";
import { Solicitante } from "./solicitante.model";

@Entity({ schema: 'adopcion', name: 'solicitudAdopcion' })
export class Solicitud {
    @PrimaryGeneratedColumn()
    SolicitudId: number;

    @OneToOne(()=> Solicitante)
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

  @Column({ nullable: false,  default: new Date() })
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}