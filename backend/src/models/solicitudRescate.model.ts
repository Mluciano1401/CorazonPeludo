import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SolicitudR {
    @PrimaryGeneratedColumn()
    SolicitudId: number;

    @Column()
    animalId:number;

    @Column()
    solicitanteId: number;

    @Column()
    estadoLugar: number;

    @Column()
    estadoEmergencia: number;

    @Column()
    estado: number;

    @Column()
    fechaCreacion: Date;

    @Column()
    surcusalId: number;

    @Column()
    fechaModificacion: Date;

    @Column()
    status:boolean;
}