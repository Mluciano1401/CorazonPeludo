import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Medicamento } from "./medicamento.model";
import { Especie } from "../animal/especie.model";


@Entity( )
export class medicamentoXespecie{
    @PrimaryColumn()
    @OneToOne(() => Especie)
    @JoinColumn()
    especie: Especie;

    @PrimaryColumn()
    @OneToOne(() => Medicamento)
    @JoinColumn()
    medicamento: Medicamento;

    @Column({ nullable: false,default: false  })
    esPrincipal: boolean;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

