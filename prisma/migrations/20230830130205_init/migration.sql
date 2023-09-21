/*
  Warnings:

  - Made the column `apelido` on table `Projeto` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tituloCompleto` on table `Projeto` required. This step will fail if there are existing NULL values in that column.
  - Made the column `objetivo` on table `Projeto` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Projeto" ALTER COLUMN "apelido" SET NOT NULL,
ALTER COLUMN "tituloCompleto" SET NOT NULL,
ALTER COLUMN "objetivo" SET NOT NULL;
