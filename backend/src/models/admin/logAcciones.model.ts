import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./usuario.model";
import { Sucursal } from "../tercero/surcusal.model";

@Entity({ schema: 'admin', name: 'logAcciones' })
export class LogAcciones {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Usuario)
    @JoinColumn()
    usuario: Usuario;

    @OneToOne(() => Sucursal)
    @JoinColumn()
    surcusal: Sucursal;

    @Column({ nullable: false })
    fecha: Date;

    @Column({ nullable: false })
    hora: Date;

    @Column({ nullable: false })
    origen: string;

    @Column({ nullable: false })
    datosAntesdelCambio: string;

    @Column({ nullable: false })
    datosDespuesdelCambio: string;

}