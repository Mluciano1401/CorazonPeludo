import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoEmpleado } from "./tipoEmpleado.model";
import { Persona } from "./persona.model";
import { Sucursal } from "./surcusal.model";

@Entity( )
export class Empleado {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Persona)
    @JoinColumn()
    persona: Persona;

    @ManyToOne(()=> Sucursal)
    @JoinColumn()
    surcusal: Sucursal;

    @ManyToOne(()=> TipoEmpleado)
    @JoinColumn()
    tipoEmpleado: TipoEmpleado;
    @Column({ nullable: true})
    puesto: string;
    
    @Column({ nullable: true})
    sueldo: number;

    @Column({ nullable: true})
    fechaIngreso: Date;
    
  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}