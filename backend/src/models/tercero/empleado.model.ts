import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoEmpleado } from "./tipoEmpleado.model";
import { Persona } from "./persona.model";
import { Sucursal } from "./surcusal.model";

@Entity({ schema: 'tercero', name: 'empleado' })
export class Empleado {
    @PrimaryGeneratedColumn()
    EmpleadoId: number;

    @OneToOne(() => Persona)
    @JoinColumn()
    persona: Persona;

    @ManyToOne(()=> Sucursal)
    @JoinColumn()
    surcusal: Sucursal;

    @ManyToOne(()=> TipoEmpleado)
    @JoinColumn()
    tipoEmpleado: TipoEmpleado;

    @Column()
    sueldo: number;

    @Column()
    fechaIngreso: Date;
    
  @Column({ nullable: false,  default: new Date() })
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}