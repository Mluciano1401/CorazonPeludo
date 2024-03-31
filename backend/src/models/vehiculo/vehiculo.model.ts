import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoVehiculo } from "./tipoVehiculo.model";
import { TipoCombustible } from "./tipoCombustible.model";

@Entity( )
export class Vehiculo {
    @PrimaryGeneratedColumn()
    vehiculoId: number;

    @OneToOne(()=> TipoVehiculo)
    @JoinColumn()
    tipoVehiculo: TipoVehiculo;

    @Column()
    numeroChasis: string;

    @Column({ nullable: false })
    placa: string;

    @Column()
    es4x4:boolean;

    @Column()
    anio:number;

    @OneToOne(()=> TipoCombustible)
    @JoinColumn()
    tipoCombustible: TipoCombustible;

    @Column()
    kilometrajeMaximo:number;
    
    @Column()
    capacidadPasajeros:number;

    @Column()
    capacidadCarga:number;
    
    @Column()
    color:string;

  @Column({ nullable: false})
    fechaModificacion: Date;
    
  @Column({ nullable: false, default: true })
    status:boolean;
}