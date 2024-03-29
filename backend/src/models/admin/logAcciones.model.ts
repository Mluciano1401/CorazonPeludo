import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./usuario.model";
import { Sucursal } from "../tercero/surcusal.model";

@Entity()
export class logAcciones {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Usuario)
    @JoinColumn()
    usuario: Usuario;

    @OneToOne(() => Sucursal)
    @JoinColumn()
    surcusal: Sucursal;

    @Column()
    fecha: Date;

    @Column()
    hora: Date;

    @Column()
    origen: string;

    @Column()
    datosAntesdelCambio: string;

    @Column()
    datosDespuesdelCambio: string;

}