/*import * as mssql from 'mssql';

export const configDB: mssql.config  = {
  dialect: 'mssql',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_PORT),
  logging: false,
}

export async function connect(): Promise<mssql.Connection> {
    return await mssql.connect(configDB);
  }
  
  export async function disconnect(connection: mssql.Connection): Promise<void> {
    await connection.close();
  }*/