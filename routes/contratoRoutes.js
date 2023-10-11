const express = require("express");
const router = express.Router();

const {
  readAllContrato,
  createOneContrato,
  readOneContrato,
  updateOneContrato,
  deleteOneContrato,
  newContrato,
  validateHash,
  gerarContrato,
} = require("../controllers/contratoController");

router.get("/contratos/new", newContrato);
router.post("/contrato/validate", validateHash);

router.get("/contratos", readAllContrato);
router.post("/contratos", createOneContrato);
router.get("/contratos/:id", readOneContrato);
router.put("/contratos/:id", updateOneContrato);
router.delete("/contratos/:id", deleteOneContrato);

router.post("/gerar-contrato", gerarContrato);

module.exports = router;
