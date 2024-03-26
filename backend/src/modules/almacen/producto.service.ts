import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateproductoDto } from './dto/create-producto.dto';
import { UpdateproductoDto } from './dto/update-producto.dto';
import { producto, productoDocument } from './schema/producto.schema';
import { Model } from 'mongoose';

@Injectable()
export class productoService {
  constructor(@InjectModel(producto.name) private productoModule: Model<productoDocument>){

  }
  async create(createproductoDto: CreateproductoDto) {
    const productoCreated = await this.productoModule.create(createproductoDto);
    return productoCreated;
  }

  async findAll(): Promise<producto[]> {
    const productolist = await this.productoModule.find({});
    return productolist;
  }

  async findOne(id: string):Promise<producto> {
    const producto = await this.productoModule.findOne({_id:id});
    return producto;
  }

  update(id: string, updateproductoDto: UpdateproductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: string) {
    return `This action removes a #${id} producto`;
  }
}
