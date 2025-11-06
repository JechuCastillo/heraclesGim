const UsuarioSistema = require("./UsuarioSistema");
const Beneficios = require("./Beneficios");

UsuarioSistema.hasMany(Beneficios, {
  foreignKey: "idUsuario",
  onDelete: "CASCADE",
});
Beneficios.belongsTo(UsuarioSistema, {
  foreignKey: "idUsuario",
});
