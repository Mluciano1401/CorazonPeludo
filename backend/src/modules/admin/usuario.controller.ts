import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { usuarioService } from './usuario.service';
import { CreateusuarioDto } from './dto/create-usuario.dto';
import { UpdateusuarioDto } from './dto/update-usuario.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('usuario')
@Controller('usuario')
export class usuarioController {
  constructor(private readonly usuarioService: usuarioService) {}

  @Post()
  create(@Body() createusuarioDto: CreateusuarioDto) {
    return this.usuarioService.create(createusuarioDto);
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateusuarioDto: UpdateusuarioDto) {
    return this.usuarioService.update(id, updateusuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(id);
  }
}
