import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: 'animal', name: 'as2' })
export class as2{
    @PrimaryGeneratedColumn()
    as2Id: number;

    @Column({ nullable: false })
    descripcion: string;

  @Column({ nullable: false,  default: new Date() })
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

