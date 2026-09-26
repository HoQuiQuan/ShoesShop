/*
  Warnings:

  - You are about to drop the column `imgUrl` on the `Comments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Comments` DROP COLUMN `imgUrl`;

-- CreateTable
CREATE TABLE `ReviewImages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `reviewId` INTEGER NOT NULL,
    `url` VARCHAR(1000) NOT NULL,

    INDEX `ReviewImages_reviewId_idx`(`reviewId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ReviewImages` ADD CONSTRAINT `ReviewImages_reviewId_fkey` FOREIGN KEY (`reviewId`) REFERENCES `Comments`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
