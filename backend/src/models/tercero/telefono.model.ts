import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoTelefono } from "./tipoTelefono.model";



@Entity( )
export class Telefono{
    @PrimaryGeneratedColumn()
    telefonoId: number;

    @OneToOne(()=> TipoTelefono)
    @JoinColumn()
    tipoTelefono: TipoTelefono;

    @Column({ nullable: false })
    descripcion: string;

    @Column()
    extension: string;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

