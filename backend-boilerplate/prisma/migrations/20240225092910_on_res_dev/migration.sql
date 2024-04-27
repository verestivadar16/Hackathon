/*
  Warnings:

  - You are about to drop the column `reservationId` on the `Devices` table. All the data in the column will be lost.
  - You are about to drop the column `deviceId` on the `Reservations` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Devices` DROP FOREIGN KEY `Devices_reservationId_fkey`;

-- AlterTable
ALTER TABLE `Devices` DROP COLUMN `reservationId`;

-- AlterTable
ALTER TABLE `Reservations` DROP COLUMN `deviceId`;

-- CreateTable
CREATE TABLE `DevicesOnReservations` (
    `deviceId` VARCHAR(191) NOT NULL,
    `reservationId` VARCHAR(191) NOT NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `assignedBy` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`deviceId`, `reservationId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DevicesOnReservations` ADD CONSTRAINT `DevicesOnReservations_deviceId_fkey` FOREIGN KEY (`deviceId`) REFERENCES `Devices`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DevicesOnReservations` ADD CONSTRAINT `DevicesOnReservations_reservationId_fkey` FOREIGN KEY (`reservationId`) REFERENCES `Reservations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
