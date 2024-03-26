import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { animalService } from './animal.service';
import { CreateanimalDto } from './dto/create-animal.dto';
import { UpdateanimalDto } from './dto/update-animal.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('animal')
@Controller('animal')
export class animalController {
  constructor(private readonly animalService: animalService) {}

  @Post()
  create(@Body() createanimalDto: CreateanimalDto) {
    return this.animalService.create(createanimalDto);
  }

  @Get()
  findAll() {
    return this.animalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animalService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateanimalDto: UpdateanimalDto) {
    return this.animalService.update(id, updateanimalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animalService.remove(id);
  }
}
