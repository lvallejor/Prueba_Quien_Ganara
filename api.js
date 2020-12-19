const axios = require("axios");
const { v4: uuid } = require("uuid");

const user = async () => {
  let { data } = await axios.get("https://randomuser.me/api");

  let nombre = data.results[0].name.first;
  let apellido = data.results[0].name.last;

  let infoUser = {
    id: uuid().slice(30),
    correo: data.results[0].email,
    nombre: `${nombre} ${apellido}`,
    pais: data.results[0].location.country,
    foto: data.results[0].picture.medium,
  };

  return infoUser;
};

module.exports = { user };
