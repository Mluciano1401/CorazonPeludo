import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateregisterDto } from './dto/create-register.dto';
import { UpdateregisterDto } from './dto/update-register.dto';
import { register, registerDocument } from './schema/register.schema';
import { Model } from 'mongoose';

@Injectable()
export class registerService {
  constructor(@InjectModel(register.name) private registerModule: Model<registerDocument>){

  }
  async create(createregisterDto: CreateregisterDto) {
    const registerCreated = await this.registerModule.create(createregisterDto);
    return registerCreated;
  }

  async findAll(): Promise<register[]> {
    const registerlist = await this.registerModule.find({});
    return registerlist;
  }

  async findOne(id: string):Promise<register> {
    const register = await this.registerModule.findOne({_id:id});
    return register;
  }

  update(id: string, updateregisterDto: UpdateregisterDto) {
    return `This action updates a #${id} register`;
  }

  remove(id: string) {
    return `This action removes a #${id} register`;
  }
}
