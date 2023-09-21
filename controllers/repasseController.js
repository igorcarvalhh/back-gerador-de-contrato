const { PrismaClient, Prisma } = require("@prisma/client");
const prisma = new PrismaClient();

exports.readAllRepasse = async (req, res, next) => {
  const hash = req.header("Hash");
  await prisma.repasse
    .findMany({
      where: {
        etapa: {
          fase: {
            projeto: {
              contrato: {
                hash: hash,
              },
            },
          },
        },
      },
    })
    .then((repasses) => res.json(repasses))
    .catch((error) => next(error));
};

exports.createOneRepasse = async (req, res, next) => {
  const repasseData = req.body;
  await prisma.repasse
    .create({ data: repasseData })
    .then((repasse) => res.json(repasse))
    .catch((error) => next(error));
};

exports.readOneRepasse = async (req, res, next) => {
  const repasseId = Number(req.params.id);
  await prisma.repasse
    .findUnique({ where: { id: repasseId } })
    .then((repasse) => res.json(repasse))
    .catch((error) => next(error));
};

exports.updateOneRepasse = async (req, res, next) => {
  const repasseId = Number(req.params.id);
  const repasseData = req.body;
  await prisma.repasse
    .update({
      where: { id: repasseId },
      data: repasseData,
    })
    .then((repasse) => res.json(repasse))
    .catch((error) => next(error));
};

exports.deleteOneRepasse = async (req, res, next) => {
  const repasseId = Number(req.params.id);
  await prisma.repasse
    .delete({ where: { id: repasseId } })
    .then((repasse) => res.json(repasse))
    .catch((error) => next(error));
};
