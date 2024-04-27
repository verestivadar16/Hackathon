/*
  Warnings:

  - The primary key for the `Devices` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Neighbours` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Programs` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Reservations` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Rooms` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Users` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `Devices` DROP FOREIGN KEY `Devices_reservationId_fkey`;

-- DropForeignKey
ALTER TABLE `Neighbours` DROP FOREIGN KEY `Neighbours_roomId_fkey`;

-- DropForeignKey
ALTER TABLE `Reservations` DROP FOREIGN KEY `Reservations_programId_fkey`;

-- DropForeignKey
ALTER TABLE `Reservations` DROP FOREIGN KEY `Reservations_roomId_fkey`;

-- DropForeignKey
ALTER TABLE `Reservations` DROP FOREIGN KEY `Reservations_userId_fkey`;

-- AlterTable
ALTER TABLE `Devices` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `reservationId` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Neighbours` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `roomId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Programs` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Reservations` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `roomId` VARCHAR(191) NOT NULL,
    MODIFY `userId` VARCHAR(191) NOT NULL,
    MODIFY `programId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Rooms` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Users` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `Neighbours` ADD CONSTRAINT `Neighbours_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Rooms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reservations` ADD CONSTRAINT `Reservations_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Rooms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reservations` ADD CONSTRAINT `Reservations_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reservations` ADD CONSTRAINT `Reservations_programId_fkey` FOREIGN KEY (`programId`) REFERENCES `Programs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Devices` ADD CONSTRAINT `Devices_reservationId_fkey` FOREIGN KEY (`reservationId`) REFERENCES `Reservations`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
