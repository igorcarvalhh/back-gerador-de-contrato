const { PrismaClient, Prisma } = require("@prisma/client");
const { getRandomHash } = require("../utils/hash");
const fs = require("fs-extra");
const { generateContract } = require("../contract-generator");
const { exec } = require("child_process");
const prisma = new PrismaClient();

const nullContrato = {
  apelido: null,
  objetivo: null,
  tituloCompleto: null,
};

const defaultFasesList = [
  {
    codigoAneel: "PD-XXXXX-00XX",
    faseCadeia: "Desenvolviemto Experimental",
    trl: 5,
  },
  {
    codigoAneel: "PD-XXXXX-60XX",
    faseCadeia: "Cabeça de Série e Lote Pioneiro",
    trl: 7,
  },
  {
    codigoAneel: "PD-XXXXX-70XX",
    faseCadeia: "Inserção em Mercado",
    trl: 9,
  },
];

exports.newContrato = async (req, res, next) => {
  const hash = getRandomHash();
  await prisma.projeto
    .create({
      data: {
        ...nullContrato,
        contrato: {
          create: {
            hash: hash,
          },
        },
        fases: {
          createMany: {
            data: defaultFasesList,
          },
        },
      },
      select: {
        contrato: {
          select: {
            hash: true,
          },
        },
      },
    })
    .then((projeto) => res.json(projeto.contrato))
    .catch((error) => next(error));
};

exports.validateHash = async (req, res, next) => {
  try {
    const hash = req.body.hash;
    console.log(hash);
    const contrato = await prisma.contrato.findUniqueOrThrow({
      where: { hash: hash },
    });
    if (contrato.status !== "ABERTO") throw new Error("Invalide hash");
    res.json({ hash: contrato.hash });
  } catch (error) {
    next(error);
  }
};

exports.readAllContrato = async (req, res, next) => {
  await prisma.contrato
    .findMany()
    .then((contratos) => res.json(contratos))
    .catch((error) => next(error));
};

exports.createOneContrato = async (req, res, next) => {
  const contratoData = req.body;
  await prisma.contrato
    .create({ data: contratoData })
    .then((contrato) => res.json(contrato))
    .catch((error) => next(error));
};

exports.readOneContrato = async (req, res, next) => {
  const contratoId = Number(req.params.id);
  await prisma.contrato
    .findUnique({ where: { id: contratoId } })
    .then((contrato) => res.json(contrato))
    .catch((error) => next(error));
};

exports.updateOneContrato = async (req, res, next) => {
  const contratoId = Number(req.params.id);
  const contratoData = req.body;
  await prisma.contrato
    .update({
      where: { id: contratoId },
      data: contratoData,
    })
    .then((contrato) => res.json(contrato))
    .catch((error) => next(error));
};

exports.deleteOneContrato = async (req, res, next) => {
  const contratoId = Number(req.params.id);
  await prisma.contrato
    .delete({ where: { id: contratoId } })
    .then((contrato) => res.json(contrato))
    .catch((error) => next(error));
};

function fatorial(n) {
  if (n < 0) {
    return undefined;
  }
  let resultado = 1n;
  for (let i = 2n; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}


// gerar pdf do contrato
exports.gerarContrato = async (req, res, next) => {
  const hash = req.header("Hash");
  const { body } = req
  const pdfFilePath = await generateContract(hash, body)

  fs.stat(pdfFilePath, (err, stats) => {
    if (err || !stats.isFile()) {
      return res.status(404).send('File not found');
    }

    // Send the file as a response
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=file.pdf');
    const fileStream = fs.createReadStream(pdfFilePath);
    fileStream.pipe(res);
    
    // Delete the file after sending
    fileStream.on('end', async () => {
      await fs.remove("./latex");
    });
  });

};
