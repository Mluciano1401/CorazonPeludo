import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TipoUsuario {
    @PrimaryGeneratedColumn()
    tipoUsuarioId: number;

    @Column()
    descripcion: string;

    @Column()
    fechaModificacion: Date;

    @Column()
    status:boolean;
}