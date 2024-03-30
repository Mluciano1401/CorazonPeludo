import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: 'almacen', name: 'tipoAlimento' })
export class TipoAlimento{
    @PrimaryGeneratedColumn()
    tipoAlimentoId: number;

    @Column({ nullable: false })
    descripcion: string;

  @Column({ nullable: false,  default: new Date() })
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

