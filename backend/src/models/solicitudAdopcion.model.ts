import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Solicitud {
    @PrimaryGeneratedColumn()
    SolicitudId: number;

    @Column()
    solicitanteId: number;

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