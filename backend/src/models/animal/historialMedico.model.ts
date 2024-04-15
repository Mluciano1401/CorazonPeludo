import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Animal } from "./animal.model";
import { Empleado } from "../tercero/empleado.model";
import { EstadoSalud } from "../salud/estadoSalud.model";
import { PolizaSeguro } from "../salud/polizaSeguro.model";



@Entity( )
export class HistorialMedico {
    @PrimaryGeneratedColumn()
    historialMedicoId: number;

    @ManyToOne(() => Animal)
    @JoinColumn()
    animal: Animal;

    @ManyToOne(() => Empleado)
    @JoinColumn()
    veterinario: Empleado;

    @ManyToOne(() => EstadoSalud)
    @JoinColumn()
    estadoSalud: EstadoSalud;

    @ManyToOne(() => PolizaSeguro)
    @JoinColumn()
    polizaSeguro: PolizaSeguro;

    @Column()
    fecha: Date;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

