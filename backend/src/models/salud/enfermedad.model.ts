import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity( )
export class Enfermedad {
    @PrimaryGeneratedColumn()
    EnfermedadId: number;

    @Column({ nullable: false })
    nombre: string;

    @Column()
    tipoEnfermedad: number;

    @Column()
    prevalencia:string;

    @Column()
    porcientoMortalidad: number;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}