import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity( )
export class TipoMedicamento {
    @PrimaryGeneratedColumn()
    tipoMedicamentoId: number;

    @Column({ nullable: false })
    descripcion: string;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

