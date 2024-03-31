import { TipoDonacion } from './tipoDonacion.model';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Persona } from "./persona.model";



@Entity( )
export class Donacion {
    @PrimaryGeneratedColumn()
    donacionId: number;

    @OneToOne(() => Persona)
    @JoinColumn()
    donador: Persona;

    @OneToOne(() => TipoDonacion)
    @JoinColumn()
    tipoDonacion: TipoDonacion;

    @Column()
    fecha: Date;

    @Column({ nullable: false})
    fechaModificacion: Date;
 
    @Column({ nullable: false, default: true })
    status:boolean;
}
