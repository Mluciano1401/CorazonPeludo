import { Injectable } from '@nestjs/common';
import { PostAdopcion } from '../../../models/adopcion/postAdopcion.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PostAdopcionService {
  _PostAdopcionRepository: Repository<any> | any;
  constructor(
   @InjectRepository(PostAdopcion) private PostAdopcionRepository: Repository<PostAdopcion>
  ) {
    this._PostAdopcionRepository = PostAdopcionRepository;
  }
  async findAll():Promise<PostAdopcion[]>{
    return await this._PostAdopcionRepository.findBy({status: true});
  }
  async findById(id:number):Promise<PostAdopcion>{
    return await this._PostAdopcionRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: PostAdopcion):Promise<PostAdopcion> {
    return await this._PostAdopcionRepository.save(user);
  }
  async update(id: number, user: PostAdopcion): Promise<void> {
    return await this._PostAdopcionRepository.update(id, user);
  }
  async delete(id: number): Promise<string> {
    await this._PostAdopcionRepository.softDelete(id);
    return 'Ok';
  }
}