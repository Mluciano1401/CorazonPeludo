import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Persona } from "../tercero/persona.model";

@Entity()
export class Solicitante {
    @PrimaryGeneratedColumn()
    SolicitanteId: number;

    @OneToOne(()=>Persona)
    @JoinColumn()
    persona: Persona;

    @Column()
    situacionFamiliar: number;

    @Column()
    ingresosMensuales: number;

    @Column()
    actividadEconomica: number;

    @Column()
    dependencia: boolean;

    @Column()
    numeroDependientes: number;

    @Column()
    fechaModificacion: Date;

    @Column()
    status:boolean;
}