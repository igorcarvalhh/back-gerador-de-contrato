const express = require("express");
const router = express.Router();

const {
  readAllEtapa,
  createOneEtapa,
  readOneEtapa,
  updateOneEtapa,
  deleteOneEtapa,
} = require("../controllers/etapaController");

router.get("/etapas", readAllEtapa);
router.post("/etapas", createOneEtapa);
router.get("/etapas/:id", readOneEtapa);
router.put("/etapas/:id", updateOneEtapa);
router.delete("/etapas/:id", deleteOneEtapa);

module.exports = router;
