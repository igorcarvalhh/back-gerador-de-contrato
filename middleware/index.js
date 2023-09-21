const { PrismaClient, Prisma } = require("@prisma/client");
const prisma = new PrismaClient();

const middleware = async (req, res, next) => {
  const contratoHash = req.headers["hash"];
  console.log("using midwhere");
  const contrato = await prisma.contrato.findUnique({
    where: { hash: contratoHash },
  });
  if ((contrato !== null) & (contrato?.status === "ABERTO")) {
    next();
  } else {
    res.status(403).json({ erro: "Acesso negado" });
  }
};

module.exports = middleware;
