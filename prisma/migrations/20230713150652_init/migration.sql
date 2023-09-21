/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ContratoStatus" AS ENUM ('ABERTO', 'FECHADO');

-- CreateEnum
CREATE TYPE "TipoParticipante" AS ENUM ('PROPONENTE', 'COOPERADA', 'EXECUTORA');

-- CreateEnum
CREATE TYPE "Rubrica" AS ENUM ('RH', 'ST', 'MC', 'VD', 'MV', 'OU');

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Profile";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Empresa" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "nomeResumido" TEXT NOT NULL,
    "cnpj" CHAR(14) NOT NULL,
    "telefone" TEXT NOT NULL,
    "cep" CHAR(8) NOT NULL,
    "endereco" TEXT NOT NULL,
    "numeroEndereco" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "deEnergia" BOOLEAN NOT NULL,
    "matriz" BOOLEAN NOT NULL,

    CONSTRAINT "Empresa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projeto" (
    "id" SERIAL NOT NULL,
    "apelido" TEXT NOT NULL,
    "tituloCompleto" TEXT NOT NULL,
    "objetivo" TEXT NOT NULL,

    CONSTRAINT "Projeto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contrato" (
    "id" SERIAL NOT NULL,
    "hash" TEXT NOT NULL,
    "status" "ContratoStatus" NOT NULL,
    "projetoId" INTEGER NOT NULL,
    "dataAssinatura" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contrato_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Participante" (
    "id" SERIAL NOT NULL,
    "empresaId" INTEGER NOT NULL,
    "contratoId" INTEGER NOT NULL,
    "tipo" "TipoParticipante" NOT NULL,
    "representante" TEXT,
    "cargo" TEXT,

    CONSTRAINT "Participante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fase" (
    "id" SERIAL NOT NULL,
    "codigoAneel" TEXT NOT NULL,
    "faseCadeia" TEXT NOT NULL,
    "trl" INTEGER NOT NULL,
    "projetoId" INTEGER NOT NULL,

    CONSTRAINT "Fase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Etapa" (
    "id" SERIAL NOT NULL,
    "numero" INTEGER NOT NULL,
    "prazo" TEXT NOT NULL,
    "faseId" INTEGER NOT NULL,

    CONSTRAINT "Etapa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Entregavel" (
    "id" SERIAL NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL,
    "etapaId" INTEGER NOT NULL,

    CONSTRAINT "Entregavel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Repasse" (
    "id" SERIAL NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "rubrica" "Rubrica" NOT NULL,
    "pagadoraId" INTEGER NOT NULL,
    "recebedoraId" INTEGER NOT NULL,
    "etapaId" INTEGER NOT NULL,

    CONSTRAINT "Repasse_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Empresa_cnpj_key" ON "Empresa"("cnpj");

-- AddForeignKey
ALTER TABLE "Contrato" ADD CONSTRAINT "Contrato_projetoId_fkey" FOREIGN KEY ("projetoId") REFERENCES "Projeto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participante" ADD CONSTRAINT "Participante_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participante" ADD CONSTRAINT "Participante_contratoId_fkey" FOREIGN KEY ("contratoId") REFERENCES "Contrato"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fase" ADD CONSTRAINT "Fase_projetoId_fkey" FOREIGN KEY ("projetoId") REFERENCES "Projeto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Etapa" ADD CONSTRAINT "Etapa_faseId_fkey" FOREIGN KEY ("faseId") REFERENCES "Fase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Entregavel" ADD CONSTRAINT "Entregavel_etapaId_fkey" FOREIGN KEY ("etapaId") REFERENCES "Etapa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Repasse" ADD CONSTRAINT "Repasse_pagadoraId_fkey" FOREIGN KEY ("pagadoraId") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Repasse" ADD CONSTRAINT "Repasse_recebedoraId_fkey" FOREIGN KEY ("recebedoraId") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Repasse" ADD CONSTRAINT "Repasse_etapaId_fkey" FOREIGN KEY ("etapaId") REFERENCES "Etapa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
