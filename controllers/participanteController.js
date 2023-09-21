const { PrismaClient, Prisma } = require("@prisma/client");
const { query } = require("express");
const prisma = new PrismaClient();

exports.readAllParticipante = async (req, res, next) => {
  const hash = req.header("Hash");
  await prisma.participante
    .findMany({
      where: { contrato: { hash: hash } },
      include: { empresa: true },
    })
    .then((participantes) => res.json(participantes))
    .catch((error) => next(error));
};

exports.createOneParticipante = async (req, res, next) => {
  const { empresaId, ...participanteData } = req.body;
  const hash = req.header("Hash");
  console.log(hash);
  await prisma.participante
    .create({
      data: {
        ...participanteData,
        contrato: {
          connect: {
            hash: hash,
          },
        },
        empresa: {
          connect: {
            id: empresaId,
          },
        },
      },
      include: { empresa: true },
    })
    .then((participante) => res.json(participante));

  // await prisma.contrato
  //   .update({
  //     where: { hash: hash },
  //     data: {
  //       participantes: {
  //         create: participanteData,
  //       },
  //     },
  //   })
  //   .then((participante) => res.json(participante));

  // await prisma.participante
  //   .create({ data: participanteData })
  //   .then((participante) => res.json(participante))
  //   .catch((error) => next(error));
};

exports.readOneParticipante = async (req, res, next) => {
  const participanteId = Number(req.params.id);
  await prisma.participante
    .findUnique({ where: { id: participanteId } })
    .then((participante) => res.json(participante))
    .catch((error) => next(error));
};

exports.updateOneParticipante = async (req, res, next) => {
  const participanteId = Number(req.params.id);
  const participanteData = req.body;
  await prisma.participante
    .update({
      where: { id: participanteId },
      data: participanteData,
    })
    .then((participante) => res.json(participante))
    .catch((error) => next(error));
};

exports.deleteOneParticipante = async (req, res, next) => {
  const participanteId = Number(req.params.id);
  await prisma.participante
    .delete({ where: { id: participanteId } })
    .then((participante) => res.json(participante))
    .catch((error) => next(error));
};
