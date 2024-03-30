import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: 'almacen', name: 'tipoProducto' })
export class TipoProducto{
    @PrimaryGeneratedColumn()
    tipoProductoId: number;

    @Column({ nullable: false })
    descripcion: string;

  @Column({ nullable: false,  default: new Date() })
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

