import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Animal } from "./animal.model";
import { Empleado } from "../tercero/empleado.model";
import { Alimento } from "../almacen/alimento.model";


@Entity( )
export class HistorialAlimentacion {
    @PrimaryGeneratedColumn()
    historialAlimentacionId: number;

    @ManyToOne(() => Animal)
    @JoinColumn()
    animal: Animal;

    @ManyToOne(() => Empleado)
    @JoinColumn()
    veterinario: Empleado;

    @ManyToOne(()=> Alimento)
    @JoinColumn()
    alimento:Alimento

    @Column({ nullable: true})
    fecha: Date;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

