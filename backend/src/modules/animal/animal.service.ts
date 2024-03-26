import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateanimalDto } from './dto/create-animal.dto';
import { UpdateanimalDto } from './dto/update-animal.dto';
import { animal, animalDocument } from './schema/animal.schema';
import { Model } from 'mongoose';

@Injectable()
export class animalService {
  constructor(@InjectModel(animal.name) private animalModule: Model<animalDocument>){

  }
  async create(createanimalDto: CreateanimalDto) {
    const animalCreated = await this.animalModule.create(createanimalDto);
    return animalCreated;
  }

  async findAll(): Promise<animal[]> {
    const animallist = await this.animalModule.find({});
    return animallist;
  }

  async findOne(id: string):Promise<animal> {
    const animal = await this.animalModule.findOne({_id:id});
    return animal;
  }

  update(id: string, updateanimalDto: UpdateanimalDto) {
    return `This action updates a #${id} animal`;
  }

  remove(id: string) {
    return `This action removes a #${id} animal`;
  }
}
