import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoUsuario } from "./tipoUsuario.model";
import { Sucursal } from "../tercero/surcusal.model";

@Entity( )
export class Usuario {
    @PrimaryGeneratedColumn()
    usuarioId: number;

    @Column({ nullable: false })
    userName: string;

    @Column({ nullable: false })
    password: string;

    @Column({ nullable: false })
    email:string;

    @Column()
    foto:string;

    @OneToOne(() => TipoUsuario)
    @JoinColumn()
    tipoUsuario: TipoUsuario;

    @OneToOne(()=> Sucursal)
    @JoinColumn()
    surcusal: Sucursal;

    @Column({ nullable: false})
    fechaModificacion: Date;

    @Column({ nullable: false, default: true })
    status:boolean;
}