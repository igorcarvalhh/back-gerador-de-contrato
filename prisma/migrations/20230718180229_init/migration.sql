/*
  Warnings:

  - A unique constraint covering the columns `[projetoId]` on the table `Fase` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Fase_projetoId_key" ON "Fase"("projetoId");
