import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./usuario.model";
import { Sucursal } from "../tercero/surcusal.model";

@Entity( )
export class LogAcciones {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Usuario)
    @JoinColumn()
    usuario: Usuario;

    @ManyToOne(() => Sucursal)
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