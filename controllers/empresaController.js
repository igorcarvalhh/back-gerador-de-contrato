const { PrismaClient, Prisma } = require("@prisma/client");
const prisma = new PrismaClient();

exports.readAllEmpresa = async (req, res, next) => {
  await prisma.empresa
    .findMany()
    .then((empresas) => res.json(empresas))
    .catch((error) => next(error));
};

exports.createOneEmpresa = async (req, res, next) => {
  const empresaData = req.body;
  await prisma.empresa
    .create({ data: empresaData })
    .then((empresa) => res.json(empresa))
    .catch((error) => next(error));
};

exports.readOneEmpresa = async (req, res, next) => {
  const empresaId = Number(req.params.id);
  await prisma.empresa
    .findUnique({ where: { id: empresaId } })
    .then((empresa) => res.json(empresa))
    .catch((error) => next(error));
};

exports.updateOneEmpresa = async (req, res, next) => {
  const empresaId = Number(req.params.id);
  const empresaData = req.body;
  await prisma.empresa
    .update({
      where: { id: empresaId },
      data: empresaData,
    })
    .then((empresa) => res.json(empresa))
    .catch((error) => next(error));
};

exports.deleteOneEmpresa = async (req, res, next) => {
  const empresaId = Number(req.params.id);
  await prisma.empresa
    .delete({ where: { id: empresaId } })
    .then((empresa) => res.json(empresa))
    .catch((error) => next(error));
};
