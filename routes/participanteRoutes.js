const express = require("express");
const router = express.Router();

const {
  readAllParticipante,
  createOneParticipante,
  readOneParticipante,
  updateOneParticipante,
  deleteOneParticipante,
} = require("../controllers/participanteController");

router.get("/participantes", readAllParticipante);
router.post("/participantes", createOneParticipante);
router.get("/participantes/:id", readOneParticipante);
router.put("/participantes/:id", updateOneParticipante);
router.delete("/participantes/:id", deleteOneParticipante);

module.exports = router;
