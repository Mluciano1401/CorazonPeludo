import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Enfermedad {
    @PrimaryGeneratedColumn()
    EnfermedadId: number;

    @Column()
    nombre: string;

    @Column()
    tipoEnfermedad: number;

    @Column()
    prevalencial:string;

    @Column()
    porcientoMortalidad: number;

    @Column()
    fechaModificacion: Date;

    @Column()
    status:boolean;
}