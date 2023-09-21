const express = require("express");
const router = express.Router();

const {
  readAllEmpresa,
  createOneEmpresa,
  readOneEmpresa,
  updateOneEmpresa,
  deleteOneEmpresa,
} = require("../controllers/empresaController");

router.get("/empresas", readAllEmpresa);
router.post("/empresas", createOneEmpresa);
router.get("/empresas/:id", readOneEmpresa);
router.put("/empresas/:id", updateOneEmpresa);
router.delete("/empresas/:id", deleteOneEmpresa);

// implementar
router.get("/empresas-de-energia", async (req, res) => {});

module.exports = router;
