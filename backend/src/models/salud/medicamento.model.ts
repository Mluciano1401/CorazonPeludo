import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity({ schema: 'tercero', name: 'medicamento' })
export class Medicamento {
    @PrimaryGeneratedColumn()
    medicamentoId: number;

    @Column({ nullable: false })
    descripcion: string;

  @Column({ nullable: false,  default: new Date() })
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

