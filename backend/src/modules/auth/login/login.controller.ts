import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { loginService } from './login.service';
import { CreateloginDto } from './dto/create-login.dto';
import { UpdateloginDto } from './dto/update-login.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('login')
@Controller('login')
export class loginController {
  constructor(private readonly loginService: loginService) {}

  @Post()
  create(@Body() createloginDto: CreateloginDto) {
    return this.loginService.create(createloginDto);
  }

  @Get()
  findAll() {
    return this.loginService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loginService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateloginDto: UpdateloginDto) {
    return this.loginService.update(id, updateloginDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loginService.remove(id);
  }
}
