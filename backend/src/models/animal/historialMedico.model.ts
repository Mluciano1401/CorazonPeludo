import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Animal } from "./animal.model";
import { Empleado } from "../tercero/empleado.model";
import { EstadoSalud } from "../salud/estadoSalud.model";
import { PolizaSeguro } from "../salud/polizaSeguro.model";



@Entity( )
export class HistorialMedico {
    @PrimaryGeneratedColumn()
    historialMedicoId: number;

    @OneToOne(() => Animal)
    @JoinColumn()
    animal: Animal;

    @OneToOne(() => Empleado)
    @JoinColumn()
    veterinario: Empleado;

    @OneToOne(() => EstadoSalud)
    @JoinColumn()
    estadoSalud: EstadoSalud;

    @OneToOne(() => PolizaSeguro)
    @JoinColumn()
    polizaSeguro: PolizaSeguro;

    @Column()
    fecha: Date;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

