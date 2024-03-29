import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Persona } from "./persona.model";


@Entity()
export class Sucursal {
    @PrimaryGeneratedColumn()
    sucursalId: number;

    @OneToOne(() => Persona)
    @JoinColumn()
    compania: Persona;

    @Column()
    descripcion: string;

    @Column()
    fechaModificacion: Date;

    @Column()
    status:boolean;
}

