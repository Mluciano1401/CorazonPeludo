import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoSintoma } from "./tipoSintomas.model";



@Entity( )
export class Sintoma {
    @PrimaryGeneratedColumn()
    sintomaId: number;

    @Column({ nullable: false })
    descripcion: string;

    @ManyToOne(() => TipoSintoma)
    @JoinColumn()
    tipoSintoma: TipoSintoma;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

