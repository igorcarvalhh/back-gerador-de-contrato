/*
  Warnings:

  - A unique constraint covering the columns `[projetoId]` on the table `Contrato` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Contrato_projetoId_key" ON "Contrato"("projetoId");
