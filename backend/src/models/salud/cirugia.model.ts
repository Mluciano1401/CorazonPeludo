import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Tratamiento } from "./tratamiento.model";
import { Persona } from "../tercero/persona.model";
import { Animal } from "../animal/animal.model";

@Entity( )
export class Cirugia{
    @OneToOne(() => Tratamiento)
    @JoinColumn()
    tratamiento: Tratamiento;

    @OneToOne(() => Persona)
    @JoinColumn()
    persona: Persona;

    @OneToOne(() => Animal)
    @JoinColumn()
    animal: Animal;

    @Column()
    duracion: number;

    @Column()
    fechaProgramada: Date;

    @Column({ nullable: false})
    fechaModificacion: Date;

    @Column({ nullable: false, default: true })
    status:boolean;
}

