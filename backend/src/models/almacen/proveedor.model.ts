import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Persona } from "../tercero/persona.model";

@Entity( )
export class Proveedor {
    @PrimaryGeneratedColumn()
    proveedorId: number;

    @OneToOne(() => Persona)
    @JoinColumn()
    persona: Persona;

    @Column()
    tipoCredito: string;

  @Column({ nullable: false})
    fechaModificacion: Date;
    
  @Column({ nullable: false, default: true })
    status:boolean;
}