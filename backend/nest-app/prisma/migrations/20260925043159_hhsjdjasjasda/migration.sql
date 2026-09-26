/*
  Warnings:

  - A unique constraint covering the columns `[productDetailId]` on the table `DamageStock` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `DamageStock_productDetailId_key` ON `DamageStock`(`productDetailId`);
