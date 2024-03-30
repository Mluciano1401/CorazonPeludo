import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: 'animal', name: 'tipoPiel' })
export class TipoPiel{
    @PrimaryGeneratedColumn()
    tipoPielId: number;

    @Column({ nullable: false })
    descripcion: string;

  @Column({ nullable: false,  default: new Date() })
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

