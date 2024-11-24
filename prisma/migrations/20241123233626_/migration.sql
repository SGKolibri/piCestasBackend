/*
  Warnings:

  - The values [Pendente,Entregue,Cancelado] on the enum `Status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Status_new" AS ENUM ('pendente', 'entregue', 'cancelado');
ALTER TABLE "Cesta" ALTER COLUMN "deliveryStatus" DROP DEFAULT;
ALTER TABLE "Cesta" ALTER COLUMN "deliveryStatus" TYPE "Status_new" USING ("deliveryStatus"::text::"Status_new");
ALTER TYPE "Status" RENAME TO "Status_old";
ALTER TYPE "Status_new" RENAME TO "Status";
DROP TYPE "Status_old";
ALTER TABLE "Cesta" ALTER COLUMN "deliveryStatus" SET DEFAULT 'pendente';
COMMIT;

-- AlterTable
ALTER TABLE "Cesta" ALTER COLUMN "deliveryStatus" SET DEFAULT 'pendente';
