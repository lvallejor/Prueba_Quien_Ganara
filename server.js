const url = require("url");

const http = require("http");

const fs = require("fs");

const { usuariosPush } = require("./pushUser");

http
  .createServer(async (req, res) => {
    if (req.url === "/" && req.method == "GET") {
      res.setHeader("Content-Type", "text/html");
      fs.readFile("index.html", "utf8", (err, data) => {
        res.end(data);
      });
    }
    if (req.url.startsWith("/usuario") && req.method == "POST") {
      await usuariosPush();
      res.end("Usuario agregado");
    }

    if (req.url.startsWith("/usuarios") && req.method == "GET") {
      const { usuarios } = JSON.parse(fs.readFileSync("usuarios.json", "utf8"));
      console.log(usuarios);
      res.end(JSON.stringify({ usuarios }));
    }

    if (req.url == "/premio" && req.method == "GET") {
      const premio = fs.readFileSync("premio.json", "utf8");
      res.end(premio);
    }

    if (req.url == "/premio" && req.method == "PUT") {
      let premio;
      req.on("data", (payload) => {
        premio = JSON.parse(payload);
      });

      req.on("end", () => {
        fs.writeFileSync("premio.json", JSON.stringify(premio));
        res.end("Premio");
      });
    }
  })
  .listen(3000, () => console.log("servidor en puerto 3000"));
