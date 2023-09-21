/*
  Warnings:

  - A unique constraint covering the columns `[hash]` on the table `Contrato` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Contrato" ALTER COLUMN "status" SET DEFAULT 'ABERTO',
ALTER COLUMN "dataAssinatura" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Projeto" ALTER COLUMN "apelido" DROP NOT NULL,
ALTER COLUMN "tituloCompleto" DROP NOT NULL,
ALTER COLUMN "objetivo" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Contrato_hash_key" ON "Contrato"("hash");
