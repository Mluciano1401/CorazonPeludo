import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
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
    SolicitudId: number;

    @OneToOne(()=>Animal)
    @JoinColumn()
    animal:Animal;

    @OneToOne(()=>Persona)
    @JoinColumn()
    remitente: Persona;

    @OneToOne(()=>EstadoLugar)
    @JoinColumn()
    estadoLugar: EstadoLugar;

    @OneToOne(()=> NivelUrgencia)
    @JoinColumn()
    nivelUrgencia: NivelUrgencia;

    @OneToOne(()=>EstadoEmergencia)
    @JoinColumn()
    estadoEmergencia: EstadoEmergencia;

    @OneToOne(()=> Estado)
    @JoinColumn()
    estado: Estado;

    @OneToOne(()=> Direccion)
    @JoinColumn()
    ubicacion: Direccion;

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