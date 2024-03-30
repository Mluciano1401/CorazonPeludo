import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoTelefono } from "./tipoTelefono.model";



@Entity({ schema: 'tercero', name: 'telefono' })
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

  @Column({ nullable: false,  default: new Date() })
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

