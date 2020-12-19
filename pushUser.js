const { user } = require("./api");
const fs = require("fs");

let userJson = JSON.parse(fs.readFileSync("usuarios.json", "utf8"));
let { usuarios } = userJson;

let usuariosPush = async () => {
  let data = await user();
  usuarios.push(data);
  fs.writeFileSync("usuarios.json", JSON.stringify(userJson));
};

module.exports = { usuariosPush };
