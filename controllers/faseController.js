const { PrismaClient, Prisma } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getFase = async (req, res, next) => {
  const hash = req.header("Hash");

  await prisma.fase
    .findMany({
      where: {
        projeto: {
          contrato: {
            hash: hash,
          },
        },
      },
      orderBy: { trl: "asc" },
      include: { etapas: true },
    })
    .then((fases) => res.json(fases))
    .catch((error) => next(error));
};

exports.readAllFase = async (req, res, next) => {
  await prisma.fase
    .findMany()
    .then((fases) => res.json(fases))
    .catch((error) => next(error));
};

exports.createOneFase = async (req, res, next) => {
  const faseData = req.body;
  await prisma.fase
    .create({ data: faseData })
    .then((fase) => res.json(fase))
    .catch((error) => next(error));
};

exports.readOneFase = async (req, res, next) => {
  const faseId = Number(req.params.id);
  await prisma.fase
    .findUnique({ where: { id: faseId } })
    .then((fase) => res.json(fase))
    .catch((error) => next(error));
};

exports.updateOneFase = async (req, res, next) => {
  const faseId = Number(req.params.id);
  const faseData = req.body;
  await prisma.fase
    .update({
      where: { id: faseId },
      data: faseData,
    })
    .then((fase) => res.json(fase))
    .catch((error) => next(error));
};

exports.deleteOneFase = async (req, res, next) => {
  const faseId = Number(req.params.id);
  await prisma.fase
    .delete({ where: { id: faseId } })
    .then((fase) => res.json(fase))
    .catch((error) => next(error));
};
