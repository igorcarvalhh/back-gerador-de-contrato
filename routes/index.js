const express = require("express");
const router = express.Router();

const empresaRoutes = require("./empresaRoutes");
const projetoRoutes = require("./projetoRoutes");
const contratoRoutes = require("./contratoRoutes");
const faseRoutes = require("./faseRoutes");
const etapaRoutes = require("./etapaRoutes");
const participanteRoutes = require("./participanteRoutes");
const entregavelRoutes = require("./entregavelRoutes");
const repasseRoutes = require("./repasseRoutes.js");
const authRoutes = require("./authRoutes.js");

router.use(empresaRoutes);
router.use(projetoRoutes);
router.use(faseRoutes);
router.use(contratoRoutes);
router.use(participanteRoutes);
router.use(etapaRoutes);
router.use(entregavelRoutes);
router.use(repasseRoutes);
router.use(authRoutes);

module.exports = router;
