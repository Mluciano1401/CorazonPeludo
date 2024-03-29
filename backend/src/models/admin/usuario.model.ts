import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoUsuario } from "./tipoUsuario.model";
import { Sucursal } from "../tercero/surcusal.model";

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

    @OneToOne(() => TipoUsuario)
    @JoinColumn()
    tipoUsuario: TipoUsuario;

    @OneToOne(()=> Sucursal)
    @JoinColumn()
    surcusal: Sucursal;

    @Column()
    fechaModificacion: Date;

    @Column()
    status:boolean;
}