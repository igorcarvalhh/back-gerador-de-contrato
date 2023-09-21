const express = require("express");
const router = express.Router();

const {
  readAllEntregavel,
  createOneEntregavel,
  readOneEntregavel,
  updateOneEntregavel,
  deleteOneEntregavel,
} = require("../controllers/entregavelController");

router.get("/entregaveis", readAllEntregavel);
router.post("/entregaveis", createOneEntregavel);
router.get("/entregaveis/:id", readOneEntregavel);
router.put("/entregaveis/:id", updateOneEntregavel);
router.delete("/entregaveis/:id", deleteOneEntregavel);

module.exports = router;
