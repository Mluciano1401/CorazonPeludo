import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoEmpleado } from "./tipoEmpleado.model";

@Entity()
export class Empleado {
    @PrimaryGeneratedColumn()
    EmpleadoId: number;

    @Column()
    personaId: number;

    @Column()
    surcusalId: number;

    @OneToOne(()=> TipoEmpleado)
    @JoinColumn()
    tipoEmpleado: TipoEmpleado;

    @Column()
    fechaIngreso: Date;
    
    @Column()
    fechaModificacion: Date;

    @Column()
    status:boolean;
}