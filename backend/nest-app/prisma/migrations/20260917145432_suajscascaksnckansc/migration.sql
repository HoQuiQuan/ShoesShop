-- DropForeignKey
ALTER TABLE `ReviewImages` DROP FOREIGN KEY `ReviewImages_reviewId_fkey`;

-- AddForeignKey
ALTER TABLE `ReviewImages` ADD CONSTRAINT `ReviewImages_reviewId_fkey` FOREIGN KEY (`reviewId`) REFERENCES `Reviews`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
