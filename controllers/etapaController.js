const { PrismaClient, Prisma } = require("@prisma/client");
const prisma = new PrismaClient();

exports.readAllEtapa = async (req, res, next) => {
  const hash = req.header("Hash");

  await prisma.etapa
    .findMany({
      where: {
        fase: {
          projeto: {
            contrato: {
              hash: hash,
            },
          },
        },
      },
      orderBy: { id: "asc" },
      include: { entregaveis: true },
    })
    .then((etapas) => res.json(etapas))
    .catch((error) => next(error));
};

exports.createOneEtapa = async (req, res, next) => {
  const etapaData = req.body;
  const empresasId = await prisma.empresa.findMany({
    where: {
      participantes: {
        some: {
          tipo: "EXECUTORA",
          contrato: { projeto: { fases: { some: { id: etapaData.faseId } } } },
        },
      },
    },
    select: { id: true },
  });

  const custoInterno = [
    {
      valor: 0,
      rubrica: "RH",
    },
    {
      valor: 0,
      rubrica: "ST",
    },
    {
      valor: 0,
      rubrica: "MC",
    },
    {
      valor: 0,
      rubrica: "VD",
    },
    {
      valor: 0,
      rubrica: "MV",
    },
    {
      valor: 0,
      rubrica: "OU",
    },
  ];
  const data = empresasId.map((empresa) => {
    return [
      {
        valor: 0,
        rubrica: "RH",
        recebedoraId: empresa.id,
      },
      {
        valor: 0,
        rubrica: "ST",
        recebedoraId: empresa.id,
      },
      {
        valor: 0,
        rubrica: "MC",
        recebedoraId: empresa.id,
      },
      {
        valor: 0,
        rubrica: "VD",
        recebedoraId: empresa.id,
      },
      {
        valor: 0,
        rubrica: "MV",
        recebedoraId: empresa.id,
      },
      {
        valor: 0,
        rubrica: "OU",
        recebedoraId: empresa.id,
      },
    ];
  });
  const merged = data.flat(1);

  const etapa = await prisma.etapa.create({
    data: {
      ...etapaData,
      repasses: {
        createMany: {
          data: [...merged, ...custoInterno],
        },
      },
    },
    include: {
      repasses: true,
      fase: { include: { projeto: { include: { contrato: true } } } },
    },
  });

  console.log(etapa);

  res.json(etapa);
};

exports.readOneEtapa = async (req, res, next) => {
  const etapaId = Number(req.params.id);
  await prisma.etapa
    .findUnique({ where: { id: etapaId } })
    .then((etapa) => res.json(etapa))
    .catch((error) => next(error));
};

exports.updateOneEtapa = async (req, res, next) => {
  const etapaId = Number(req.params.id);
  const etapaData = req.body;
  await prisma.etapa
    .update({
      where: { id: etapaId },
      data: etapaData,
    })
    .then((etapa) => res.json(etapa))
    .catch((error) => next(error));
};

exports.deleteOneEtapa = async (req, res, next) => {
  const etapaId = Number(req.params.id);
  await prisma.etapa
    .delete({ where: { id: etapaId } })
    .then((etapa) => res.json(etapa))
    .catch((error) => next(error));
};
