import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  _appService:  AppService;
  constructor(private AppService: AppService) {
    this._appService = this.AppService;
  }

  @Get()
  getHello(): string {
    return this._appService.getHello();
  }
}
