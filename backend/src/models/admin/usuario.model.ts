import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @Column({ nullable: true})
    foto:string;

    @ManyToOne(() => TipoUsuario)
    @JoinColumn()
    tipoUsuario: TipoUsuario;

    @ManyToOne(()=> Sucursal)
    @JoinColumn()
    surcusal: Sucursal;

    @Column({ nullable: false})
    fechaModificacion: Date;

    @Column({ nullable: false, default: true })
    status:boolean;
}