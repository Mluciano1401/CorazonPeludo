import { Model, DataTypes, ForeignKey } from 'sequelize';

export class Rol extends Model {
  public id!: number;
  public nombre!: string;

  // ...
}

export class Usuario extends Model {
  public id!: number;
  public nombre!: string;
  public correo!: string;
  public password!: string;

  @ForeignKey(() => Rol)
  public rolId!: number;

  // ...
}

export const RolModel = (sequelize: any) => {
  // ...
};

export const UsuarioModel = (sequelize: any) => {
  Usuario.init(
    {
      // ...
      rolId: {
        type: DataTypes.INTEGER,
        references: {
          model: Rol,
          key: 'id',
        },
      },
    },
    {
      // ...
    },
  );

  Usuario.belongsTo(Rol, { foreignKey: 'rolId' });

  return Usuario;
};