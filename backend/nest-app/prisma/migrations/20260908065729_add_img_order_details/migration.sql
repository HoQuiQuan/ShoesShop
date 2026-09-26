/*
  Warnings:

  - Added the required column `img` to the `OrderDetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `OrderDetails` ADD COLUMN `img` VARCHAR(1000) NOT NULL;
