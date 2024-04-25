import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Persona } from "../tercero/persona.model";

@Entity( )
export class Proveedor {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Persona)
    @JoinColumn()
    persona: Persona;

    @Column({ nullable: true})
    tipoCredito: string;

  @Column({ nullable: false})
    fechaModificacion: Date;
    
  @Column({ nullable: false, default: true })
    status:boolean;
}