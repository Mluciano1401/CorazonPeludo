import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      useFactory: async () => {
        return new Sequelize({
          ...require('./ormconfig.json'),
        });
      },
    }),
  ],
  providers: [],
  exports: [SequelizeModule],
})
export class SequelizeModule {}