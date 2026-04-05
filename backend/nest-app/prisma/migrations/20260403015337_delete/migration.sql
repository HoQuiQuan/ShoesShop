/*
  Warnings:

  - You are about to drop the `Branch` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Employees` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Region` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Warehouse` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Branch` DROP FOREIGN KEY `Branch_regionId_fkey`;

-- DropForeignKey
ALTER TABLE `Employees` DROP FOREIGN KEY `Employees_warehouseId_fkey`;

-- DropForeignKey
ALTER TABLE `ProductStock` DROP FOREIGN KEY `ProductStock_warehouseId_fkey`;

-- DropForeignKey
ALTER TABLE `Warehouse` DROP FOREIGN KEY `Warehouse_branchId_fkey`;

-- DropTable
DROP TABLE `Branch`;

-- DropTable
DROP TABLE `Employees`;

-- DropTable
DROP TABLE `Region`;

-- DropTable
DROP TABLE `Warehouse`;
