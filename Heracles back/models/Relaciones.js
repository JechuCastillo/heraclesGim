const UsuarioSistema = require("./UsuarioSistema");
const Beneficios = require("./Beneficios");
const sequelize = require("../config/db");

UsuarioSistema.hasMany(Beneficios, {
  foreignKey: "idUsuario",
  sourceKey: "idUsuario",
  onDelete: "CASCADE",
});
Beneficios.belongsTo(UsuarioSistema, {
  foreignKey: "idUsuario",
  targetKey: "idUsuario",
});

sequelize.sync();
