const express = require("express")
const router = express.Router()
const productoController = require("../controllers/producto.controller")

router.post("/", productoController.create)
router.get("/", productoController.find)
router.get("/:id", productoController.findOne)
router.put("/:id", productoController.update)
router.delete("/:id", productoController.remove)

module.exports = router;
