const express = require("express")
const router = express.Router()
const usuarioController = require("../controllers/usuarios.controller")
router.post("login", usuariosController.login)

module.exports = router
