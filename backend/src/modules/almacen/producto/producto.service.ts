import { Injectable } from '@nestjs/common';
import { Producto } from '../../../models/almacen/producto.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductoService {
  _ProductoRepository: Repository<any> | any;
  constructor(
   @InjectRepository(Producto) private ProductoRepository: Repository<Producto>
  ) {
    this._ProductoRepository = ProductoRepository;
  }
  async findAll():Promise<Producto[]>{
    return await this._ProductoRepository.findBy({status: true});
  }
  async findById(id:number):Promise<Producto>{
    return await this._ProductoRepository.findOneBy({id:id,status:true});
  }
  async create(user: Producto):Promise<Producto> {
    return await this._ProductoRepository.save(user);
  }
  async  update( user: Producto): Promise<void> {
    return await this._ProductoRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._ProductoRepository.softDelete(id);
    return 'Ok';
  }
}