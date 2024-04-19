import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import { HistorialMedico } from "./historialMedico.model";
import { Vacuna } from "../salud/vacuna.model";
import { Persona } from "../tercero/persona.model";

@Entity( )
export class HistorialVacunas{
    @PrimaryColumn()
    id: number;
    @ManyToOne(() => HistorialMedico)
    @JoinColumn()
    historial:  HistorialMedico;

    @ManyToOne(() => Vacuna)
    @JoinColumn()
    vacuna:  Vacuna;

    @Column({ nullable: true})
    fecha: Date;

    @ManyToOne(() => Persona)
    @JoinColumn()
    persona:  Persona;

    @Column({ nullable: false})
    fechaModificacion: Date;

    @Column({ nullable: false, default: true })
    status:boolean;
}

