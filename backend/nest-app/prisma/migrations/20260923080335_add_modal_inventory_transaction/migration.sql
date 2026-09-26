-- CreateTable
CREATE TABLE `InventoryTransactions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productDetailId` INTEGER NOT NULL,
    `type` ENUM('STOCK_IN', 'STOCK_OUT', 'SALE', 'RETURN', 'ADJUSTMENT') NOT NULL,
    `quantity` INTEGER NOT NULL,
    `beforeQuantity` INTEGER NOT NULL,
    `afterQuantity` INTEGER NOT NULL,
    `reason` VARCHAR(500) NULL,
    `note` VARCHAR(1000) NULL,
    `orderId` INTEGER NULL,
    `returnRequestId` INTEGER NULL,
    `adminId` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `InventoryTransactions_productDetailId_idx`(`productDetailId`),
    INDEX `InventoryTransactions_type_idx`(`type`),
    INDEX `InventoryTransactions_createdAt_idx`(`createdAt`),
    INDEX `InventoryTransactions_orderId_idx`(`orderId`),
    INDEX `InventoryTransactions_returnRequestId_idx`(`returnRequestId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `InventoryTransactions` ADD CONSTRAINT `InventoryTransactions_productDetailId_fkey` FOREIGN KEY (`productDetailId`) REFERENCES `ProductDetails`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InventoryTransactions` ADD CONSTRAINT `InventoryTransactions_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Orders`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InventoryTransactions` ADD CONSTRAINT `InventoryTransactions_returnRequestId_fkey` FOREIGN KEY (`returnRequestId`) REFERENCES `ReturnRequests`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InventoryTransactions` ADD CONSTRAINT `InventoryTransactions_adminId_fkey` FOREIGN KEY (`adminId`) REFERENCES `Users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
