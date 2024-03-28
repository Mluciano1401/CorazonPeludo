import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Solicitante {
    @PrimaryGeneratedColumn()
    SolicitanteId: number;

    @Column()
    personaId: number;

    @Column()
    situacionFamiliar: number;

    @Column()
    ingresosMensuales: number;

    @Column()
    actividadEconomica: number;

    @Column()
    dependencia: boolean;

    @Column()
    numeroDependientes: number;

    @Column()
    fechaModificacion: Date;

    @Column()
    status:boolean;
}