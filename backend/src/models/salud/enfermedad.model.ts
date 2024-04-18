import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoEnfermedad } from "./tipoEnfermedad.model";

@Entity( )
export class Enfermedad {
    @PrimaryGeneratedColumn()
    EnfermedadId: number;

    @Column({ nullable: false })
    nombre: string;

    @ManyToOne(() => TipoEnfermedad)
    @JoinColumn()
    tipoEnfermedad: TipoEnfermedad;

    @Column({ nullable: true})
    prevalencia:string;

    @Column({ nullable: true})
    porcientoMortalidad: number;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}