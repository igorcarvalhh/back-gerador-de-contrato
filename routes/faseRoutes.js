const express = require("express");
const router = express.Router();

const middleware = require("../middleware");
const {
  readAllFase,
  createOneFase,
  readOneFase,
  updateOneFase,
  deleteOneFase,
  getFase,
} = require("../controllers/faseController");

// router.use("/fase", middleware);
// router.use("/fases", middleware);

router.get("/fase", getFase);

router.get("/fases", readAllFase);
router.post("/fases", createOneFase);
router.get("/fases/:id", readOneFase);
router.put("/fases/:id", updateOneFase);
router.delete("/fases/:id", deleteOneFase);

module.exports = router;
