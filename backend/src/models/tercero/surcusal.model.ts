import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Persona } from "./persona.model";


@Entity( )
export class Sucursal {
    @PrimaryGeneratedColumn()
    sucursalId: number;

    @ManyToOne(() => Persona)
    @JoinColumn()
    compania: Persona;

    @Column({ nullable: false })
    descripcion: string;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

