/*
  Warnings:

  - Added the required column `provider` to the `Customers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Customers` ADD COLUMN `provider` VARCHAR(191) NOT NULL;
