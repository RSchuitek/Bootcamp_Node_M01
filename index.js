const express = require("express");

const server = express();

// Query params = ?teste=1
// Route params = /users/1
// Request body = { "name": "Luiz", "email": "rodrigoschuitek@gmail.com" }

server.get("/teste", (req, res) => {
  const nome = req.query.nome; 

  return res.json({ message: `Olá ${nome}!!!!!!` });
});

server.listen(3000);
