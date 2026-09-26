-- CreateTable
CREATE TABLE `ReturnRequests` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `orderId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `status` ENUM('PENDING', 'APPROVED', 'RECEIVED', 'INSPECTING', 'COMPLETED', 'REJECTED', 'CANCELLED') NOT NULL DEFAULT 'PENDING',
    `reason` TEXT NULL,
    `note` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `ReturnRequests_orderId_idx`(`orderId`),
    INDEX `ReturnRequests_userId_idx`(`userId`),
    INDEX `ReturnRequests_status_idx`(`status`),
    INDEX `ReturnRequests_createdAt_idx`(`createdAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ReturnItems` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `returnRequestId` INTEGER NOT NULL,
    `orderDetailId` INTEGER NOT NULL,
    `returnedQuantity` INTEGER NOT NULL,
    `normalQuantity` INTEGER NOT NULL DEFAULT 0,
    `damagedQuantity` INTEGER NOT NULL DEFAULT 0,
    `inspectionNote` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `ReturnItems_returnRequestId_idx`(`returnRequestId`),
    INDEX `ReturnItems_orderDetailId_idx`(`orderDetailId`),
    UNIQUE INDEX `ReturnItems_returnRequestId_orderDetailId_key`(`returnRequestId`, `orderDetailId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ReturnRequests` ADD CONSTRAINT `ReturnRequests_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Orders`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReturnRequests` ADD CONSTRAINT `ReturnRequests_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReturnItems` ADD CONSTRAINT `ReturnItems_returnRequestId_fkey` FOREIGN KEY (`returnRequestId`) REFERENCES `ReturnRequests`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReturnItems` ADD CONSTRAINT `ReturnItems_orderDetailId_fkey` FOREIGN KEY (`orderDetailId`) REFERENCES `OrderDetails`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
