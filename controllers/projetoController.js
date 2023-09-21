const { PrismaClient, Prisma } = require("@prisma/client");
const prisma = new PrismaClient();

const includeProjeto = {
  fases: true,
  contrato: true,
};

exports.getProjeto = async (req, res, next) => {
  const hash = req.header("Hash");

  await prisma.projeto
    .findFirst({
      where: {
        contrato: {
          hash: hash,
        },
      },
      include: {
        fases: {
          orderBy: { trl: "asc" },
        },
      },
    })
    .then((projeto) => res.json(projeto))
    .catch((error) => next(error));
};

exports.readAllProjeto = async (req, res, next) => {
  await prisma.projeto
    .findMany({ include: includeProjeto })
    .then((projeto) => res.json(projeto))
    .catch((error) => next(error));
};

exports.createOneProjeto = async (req, res, next) => {
  const projetoData = req.body;
  await prisma.projeto
    .create({ data: projetoData, include: includeProjeto })
    .then((projeto) => res.json(projeto))
    .catch((error) => next(error));
};

exports.readOneProjeto = async (req, res, next) => {
  const projetoId = Number(req.params.projetoId);
  await prisma.projeto
    .findUnique({ where: { id: projetoId }, include: includeProjeto })
    .then((projeto) => res.json(projeto))
    .catch((error) => next(error));
};

exports.updateOneProjeto = async (req, res, next) => {
  const projetoId = Number(req.params.projetoId);
  const projetoData = req.body;
  await prisma.projeto
    .update({
      where: { id: projetoId },
      data: projetoData,
      include: includeProjeto,
    })
    .then((projeto) => res.json(projeto))
    .catch((error) => next(error));
};

exports.deleteOneProjeto = async (req, res, next) => {
  const projetoId = Number(req.params.projetoId);
  await prisma.projeto
    .delete({ where: { id: projetoId }, include: includeProjeto })
    .then((projeto) => res.json(projeto))
    .catch((error) => next(error));
};
