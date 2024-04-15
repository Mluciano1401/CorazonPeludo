import { TipoDonacion } from './tipoDonacion.model';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Persona } from "./persona.model";



@Entity( )
export class Donacion {
    @PrimaryGeneratedColumn()
    donacionId: number;

    @ManyToOne(() => Persona)
    @JoinColumn()
    donador: Persona;

    @ManyToOne(() => TipoDonacion)
    @JoinColumn()
    tipoDonacion: TipoDonacion;

    @Column()
    fecha: Date;

    @Column({ nullable: false})
    fechaModificacion: Date;
 
    @Column({ nullable: false, default: true })
    status:boolean;
}
