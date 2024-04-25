import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Sucursal } from "../tercero/surcusal.model";
import { Persona } from "../tercero/persona.model";
import { Estado } from "../miscelaneo/estado.model";
import { Direccion } from "../miscelaneo/direccion.model";
import { NivelUrgencia } from "../miscelaneo/nivelUrgencia.model";
import { EstadoLugar } from "./estadoLugar.model";
import { Animal } from "../animal/animal.model";
import { EstadoEmergencia } from "./estadoEmergencia.model";

@Entity( )
export class SolicitudR {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>Animal)
    @JoinColumn()
    animal:Animal;

    @ManyToOne(()=>Persona)
    @JoinColumn()
    remitente: Persona;

    @ManyToOne(()=>EstadoLugar)
    @JoinColumn()
    estadoLugar: EstadoLugar;

    @ManyToOne(()=> NivelUrgencia)
    @JoinColumn()
    nivelUrgencia: NivelUrgencia;

    @ManyToOne(()=>EstadoEmergencia)
    @JoinColumn()
    estadoEmergencia: EstadoEmergencia;

    @ManyToOne(()=> Estado)
    @JoinColumn()
    estado: Estado;

    @ManyToOne(()=> Direccion)
    @JoinColumn()
    ubicacion: Direccion;

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