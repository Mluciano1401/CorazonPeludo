import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Tratamiento } from "./tratamiento.model";
import { Persona } from "../tercero/persona.model";
import { Animal } from "../animal/animal.model";

@Entity( )
export class Cirugia{
    @PrimaryColumn()
    id: number;
    @ManyToOne(() => Tratamiento)
    @JoinColumn()
    tratamiento: Tratamiento;

    @ManyToOne(() => Persona)
    @JoinColumn()
    persona: Persona;

    @ManyToOne(() => Animal)
    @JoinColumn()
    animal: Animal;

    @Column({ nullable: true})
    duracion: number;

    @Column({ nullable: true})
    fechaProgramada: Date;

    @Column({ nullable: false})
    fechaModificacion: Date;

    @Column({ nullable: false, default: true })
    status:boolean;
}

