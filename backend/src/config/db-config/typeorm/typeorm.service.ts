import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeormService  implements TypeOrmOptionsFactory {
    createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
        return {
            type: 'mssql',
            host: '169.254.75.121',
            username: 'lucranog',
            password: '1234',
            port: 1433,
            database: 'CorazonPeludoDB',
            entities: ['dist/**/*.model.{ts,js}'],
            synchronize: true,
        };
    }
}
