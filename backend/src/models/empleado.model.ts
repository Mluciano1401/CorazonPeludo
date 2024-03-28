import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Empleado {
    @PrimaryGeneratedColumn()
    EmpleadoId: number;

    @Column()
    personaId: number;

    @Column()
    surcusalId: number;

    @Column()
    tipoEmpleado: number;

    @Column()
    fechaIngreso: Date;
    
    @Column()
    fechaModificacion: Date;

    @Column()
    status:boolean;
}