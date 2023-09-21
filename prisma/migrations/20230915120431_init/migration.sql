-- DropForeignKey
ALTER TABLE "Repasse" DROP CONSTRAINT "Repasse_pagadoraId_fkey";

-- DropForeignKey
ALTER TABLE "Repasse" DROP CONSTRAINT "Repasse_recebedoraId_fkey";

-- AlterTable
ALTER TABLE "Repasse" ALTER COLUMN "pagadoraId" DROP NOT NULL,
ALTER COLUMN "recebedoraId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Repasse" ADD CONSTRAINT "Repasse_pagadoraId_fkey" FOREIGN KEY ("pagadoraId") REFERENCES "Empresa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Repasse" ADD CONSTRAINT "Repasse_recebedoraId_fkey" FOREIGN KEY ("recebedoraId") REFERENCES "Empresa"("id") ON DELETE SET NULL ON UPDATE CASCADE;
