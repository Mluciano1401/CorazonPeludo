import { Model, DataTypes } from 'sequelize';

export class Usuario extends Model {
  public usuarioId!: number;
  public nombreUsuario!: string;
  public correo!: string;
  public password!: string;
}

export const UsuarioModel = (sequelize: any) => {
  Usuario.init(
    {
      usuarioId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombreUsuario: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      correo: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Usuario',
      timestamps: true,
    },
  );

  return Usuario;
};