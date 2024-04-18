import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoTelefono } from "./tipoTelefono.model";
import { personaXtelefono } from "./personaXtelefono.model";



@Entity( )
export class Telefono{
    @PrimaryGeneratedColumn()
    telefonoId: number;

    @ManyToOne(()=> TipoTelefono)
    @JoinColumn()
    tipoTelefono: TipoTelefono;

    @Column({ nullable: false })
    descripcion: string;

    @Column({ nullable: true})
    extension: string;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

