import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Animal } from "./animal.model";
import { Empleado } from "../tercero/empleado.model";


@Entity( )
export class HistorialAlimentacion {
    @PrimaryGeneratedColumn()
    historialMedicoId: number;

    @OneToOne(() => Animal)
    @JoinColumn()
    animal: Animal;

    @OneToOne(() => Empleado)
    @JoinColumn()
    veterinario: Empleado;

    @Column()
    fecha: Date;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

