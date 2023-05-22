/*
  Warnings:

  - You are about to drop the `parkingdata` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `violations` MODIFY `description` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `parkingdata`;

-- CreateTable
CREATE TABLE `parking-data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nim` VARCHAR(191) NOT NULL,
    `lisencePlate` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `parking-data_nim_lisencePlate_key`(`nim`, `lisencePlate`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
