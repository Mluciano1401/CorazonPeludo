import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: 'animal', name: 'as' })
export class as{
    @PrimaryGeneratedColumn()
    asId: number;

    @Column({ nullable: false })
    descripcion: string;

  @Column({ nullable: false,  default: new Date() })
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

