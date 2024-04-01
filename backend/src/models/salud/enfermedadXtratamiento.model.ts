
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Enfermedad } from "./enfermedad.model";
import { Tratamiento } from "./tratamiento.model";


@Entity( )
export class enfermedadXtartamiento{
  @PrimaryColumn()
  id: number;
      @OneToOne(() => Enfermedad)
    @JoinColumn()
    enfermedad: Enfermedad;

      @OneToOne(() => Tratamiento)
    @JoinColumn()
    tratamiento: Tratamiento;

    @Column()
    duracion: number;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

