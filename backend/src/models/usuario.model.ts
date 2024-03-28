import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    usuarioId: number;

    @Column()
    userName: string;

    @Column()
    password: string;

    @Column()
    email:string;

    @Column()
    foto:string;

    @Column()
    tipoUsuario: number;

    @Column()
    surcusalId: number;

    @Column()
    fechaModificacion: Date;

    @Column()
    status:boolean;
}