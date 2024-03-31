import { TipoMedicamento } from './tipoMedicamento.model';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Producto } from "../almacen/producto.model";
import { ViaAdministracion } from './viaAdministracion.model';



@Entity( )
export class Medicamento {
    @PrimaryGeneratedColumn()
    medicamentoId: number;

    @Column({ nullable: false })
    descripcion: string;

    @OneToOne(() => Producto)
    @JoinColumn()
    producto: Producto;

    @OneToOne(() => TipoMedicamento)
    @JoinColumn()
    tipoMedicamento: TipoMedicamento;

    @Column()
    laboratorio: string;

    @OneToOne(() => ViaAdministracion)
    @JoinColumn()
    viaAdministracion: ViaAdministracion;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

