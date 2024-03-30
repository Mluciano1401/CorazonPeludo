import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Persona } from "./persona.model";


@Entity({ schema: 'tercero', name: 'sucursal' })
export class Sucursal {
    @PrimaryGeneratedColumn()
    sucursalId: number;

    @OneToOne(() => Persona)
    @JoinColumn()
    compania: Persona;

    @Column({ nullable: false })
    descripcion: string;

  @Column({ nullable: false,  default: new Date() })
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

