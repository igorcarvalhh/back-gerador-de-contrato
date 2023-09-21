const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.validateHash = async (req, res, next) => {
  try {
    const hash = req.body.hash;
    const contrato = await prisma.contrato.findUniqueOrThrow({
      where: { hash: hash },
    });
    if (contrato.status !== "ABERTO") throw new Error("Invalide hash");
    res.json({ hash: contrato.hash });
  } catch (error) {
    next(error);
  }
};
