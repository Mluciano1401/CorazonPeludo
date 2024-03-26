import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateloginDto } from './dto/create-login.dto';
import { UpdateloginDto } from './dto/update-login.dto';
import { login, loginDocument } from './schema/login.schema';
import { Model } from 'mongoose';

@Injectable()
export class loginService {
  constructor(@InjectModel(login.name) private loginModule: Model<loginDocument>){

  }
  async create(createloginDto: CreateloginDto) {
    const loginCreated = await this.loginModule.create(createloginDto);
    return loginCreated;
  }

  async findAll(): Promise<login[]> {
    const loginlist = await this.loginModule.find({});
    return loginlist;
  }

  async findOne(id: string):Promise<login> {
    const login = await this.loginModule.findOne({_id:id});
    return login;
  }

  update(id: string, updateloginDto: UpdateloginDto) {
    return `This action updates a #${id} login`;
  }

  remove(id: string) {
    return `This action removes a #${id} login`;
  }
}
