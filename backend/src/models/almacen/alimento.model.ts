import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoAlimento } from "./tipoAlimento.model";

@Entity( )
export class Alimento{
    @PrimaryGeneratedColumn()
    alimentoId: number;

    @Column({ nullable: false })
    descripcion: string;

    @Column({ nullable: false, default: 0 })
    contenido: number;

    @Column({ nullable: false })
    unidadMedida: string;

    @OneToOne(()=> TipoAlimento)
    @JoinColumn()
    tipoAlimento: TipoAlimento;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

