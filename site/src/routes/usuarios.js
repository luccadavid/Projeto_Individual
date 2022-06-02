var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/btnCadastrar", function (req, res) {
    usuarioController.btnCadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.btnEntrar(req, res);
});

module.exports = router;