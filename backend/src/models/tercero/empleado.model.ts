import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoEmpleado } from "./tipoEmpleado.model";
import { Persona } from "./persona.model";
import { Sucursal } from "./surcusal.model";

@Entity( )
export class Empleado {
    @PrimaryGeneratedColumn()
    EmpleadoId: number;

    @OneToOne(() => Persona)
    @JoinColumn()
    persona: Persona;

    @OneToOne(()=> Sucursal)
    @JoinColumn()
    surcusal: Sucursal;

    @OneToOne(()=> TipoEmpleado)
    @JoinColumn()
    tipoEmpleado: TipoEmpleado;
    @Column()
    puesto: string;
    
    @Column()
    sueldo: number;

    @Column()
    fechaIngreso: Date;
    
  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}