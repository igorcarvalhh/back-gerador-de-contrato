const express = require("express");
const router = express.Router();

const {
  readAllRepasse,
  createOneRepasse,
  readOneRepasse,
  updateOneRepasse,
  deleteOneRepasse,
} = require("../controllers/repasseController");

router.get("/repasses", readAllRepasse);
router.post("/repasses", createOneRepasse);
router.get("/repasses/:id", readOneRepasse);
router.put("/repasses/:id", updateOneRepasse);
router.delete("/repasses/:id", deleteOneRepasse);

module.exports = router;
