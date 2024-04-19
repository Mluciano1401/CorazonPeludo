import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Animal } from "./animal.model";
import { Empleado } from "../tercero/empleado.model";


@Entity( )
export class HistorialAlimentacion {
    @PrimaryGeneratedColumn()
    historialMedicoId: number;

    @ManyToOne(() => Animal)
    @JoinColumn()
    animal: Animal;

    @ManyToOne(() => Empleado)
    @JoinColumn()
    veterinario: Empleado;

    @Column({ nullable: true})
    fecha: Date;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

