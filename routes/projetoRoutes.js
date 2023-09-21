const express = require("express");
const router = express.Router();

const {
  readAllProjeto,
  createOneProjeto,
  readOneProjeto,
  updateOneProjeto,
  deleteOneProjeto,
  getProjeto,
} = require("../controllers/projetoController");

// const middleware = require("../middleware");
// router.use("/projetos", middleware);

router.get("/projeto", getProjeto);

router.get("/projetos", readAllProjeto);
router.post("/projetos", createOneProjeto);
router.get("/projetos/:projetoId", readOneProjeto);
router.put("/projetos/:projetoId", updateOneProjeto);
router.delete("/projetos/:projetoId", deleteOneProjeto);

module.exports = router;
