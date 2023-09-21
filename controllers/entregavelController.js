const { PrismaClient, Prisma } = require("@prisma/client");
const prisma = new PrismaClient();

exports.readAllEntregavel = async (req, res, next) => {
  const hash = req.header("Hash");
  await prisma.entregavel
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
    .then((entregaveis) => res.json(entregaveis))
    .catch((error) => next(error));
};

exports.createOneEntregavel = async (req, res, next) => {
  const entregavelData = req.body;
  await prisma.entregavel
    .create({ data: entregavelData })
    .then((entregavel) => res.json(entregavel))
    .catch((error) => next(error));
};

exports.readOneEntregavel = async (req, res, next) => {
  const entregavelId = Number(req.params.id);
  await prisma.entregavel
    .findUnique({ where: { id: entregavelId } })
    .then((entregavel) => res.json(entregavel))
    .catch((error) => next(error));
};

exports.updateOneEntregavel = async (req, res, next) => {
  const entregavelId = Number(req.params.id);
  const entregavelData = req.body;
  await prisma.entregavel
    .update({
      where: { id: entregavelId },
      data: entregavelData,
    })
    .then((entregavel) => res.json(entregavel))
    .catch((error) => next(error));
};

exports.deleteOneEntregavel = async (req, res, next) => {
  const entregavelId = Number(req.params.id);
  await prisma.entregavel
    .delete({ where: { id: entregavelId } })
    .then((entregavel) => res.json(entregavel))
    .catch((error) => next(error));
};
