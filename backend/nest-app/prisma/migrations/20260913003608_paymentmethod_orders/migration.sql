/*
  Warnings:

  - The values [BANK_TRANSFER,STRIPE] on the enum `Orders_paymentMethod` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Orders` MODIFY `paymentMethod` ENUM('COD', 'VNPAY', 'MOMO') NOT NULL;
