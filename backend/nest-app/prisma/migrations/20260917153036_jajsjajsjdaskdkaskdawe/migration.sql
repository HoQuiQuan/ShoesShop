/*
  Warnings:

  - You are about to drop the column `rate` on the `Products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Products` DROP COLUMN `rate`,
    ADD COLUMN `ratingSum` INTEGER NOT NULL DEFAULT 0;
