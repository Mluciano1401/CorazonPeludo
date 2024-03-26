import { Sequelize } from 'sequelize';
import { UsuarioModel } from '../../models/admin/usuario.model';
import { configDB } from '../../config/dbContext/dbContext';

export async function crearUsuario(nombre: string, correo: string, password: string) {
  const sequelize = new Sequelize( configDB );

  const usuario = await UsuarioModel(sequelize).create({
    nombre,
    correo,
    password,
  });

  await sequelize.close();

  return usuario;
}

export async function obtenerUsuarios() {
  const sequelize = new Sequelize( configDB );

  const usuarios = await UsuarioModel(sequelize).findAll();

  await sequelize.close();

  return usuarios;
}