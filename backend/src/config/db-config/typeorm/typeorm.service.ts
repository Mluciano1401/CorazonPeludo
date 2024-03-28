import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeormService  implements TypeOrmOptionsFactory {
    createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
        return {
            type: 'mssql',
            host: 'localhost',
            username: 'lucranog',
            password: '1234',
            port: 1433,
            database: 'CorazonPeludoDB',
            entities: ['dist/**/*.model.{ts,js}'],
            synchronize: true,
            options: {
                encrypt: true, // Habilitar el cifrado
                trustServerCertificate: true, // Confiar en el certificado
            },
        };
    }
}
