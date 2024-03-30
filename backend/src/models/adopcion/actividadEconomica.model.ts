import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: 'adopcion', name: 'actividadEconomica' })
export class ActividadEconomica{
    @PrimaryGeneratedColumn()
    actividadEconomicaId: number;

    @Column({ nullable: false })
    descripcion: string;

  @Column({ nullable: false,  default: new Date() })
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

