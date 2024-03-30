import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoAlimento } from "./tipoAlimento.model";

@Entity({ schema: 'almacen', name: 'Alimento' })
export class Alimento{
    @PrimaryGeneratedColumn()
    alimentoId: number;

    @Column({ nullable: false })
    descripcion: string;

    @Column({ nullable: false, default: 0 })
    contenido: number;

    @Column({ nullable: false })
    unidadMedida: string;

    @ManyToOne(()=> TipoAlimento)
    @JoinColumn()
    tipoAlimento: TipoAlimento;

  @Column({ nullable: false,  default: new Date() })
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

