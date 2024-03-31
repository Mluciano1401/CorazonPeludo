import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoSintoma } from "./tipoSintomas.model";



@Entity( )
export class Sintoma {
    @PrimaryGeneratedColumn()
    sintomaId: number;

    @Column({ nullable: false })
    descripcion: string;

    @OneToOne(() => TipoSintoma)
    @JoinColumn()
    tipoSintoma: TipoSintoma;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

