import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Producto {
    @PrimaryGeneratedColumn()
    productoId: number;

    @Column()
    nombre: string;

    @Column()
    lote: string;

    @Column()
    tipoProducto:number;

    @Column()
    costo:number;

    @Column()
    marca: number;

    @Column()
    fechaVencimiento: Date;

    @Column()
    fechaModificacion: Date;
    
    @Column()
    status:boolean;
}