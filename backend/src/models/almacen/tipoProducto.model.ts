import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity( )
export class TipoProducto{
    @PrimaryGeneratedColumn()
    tipoProductoId: number;

    @Column({ nullable: false })
    descripcion: string;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

