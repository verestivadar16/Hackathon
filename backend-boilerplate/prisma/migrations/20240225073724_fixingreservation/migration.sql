/*
  Warnings:

  - You are about to drop the column `reservedBy` on the `Reservations` table. All the data in the column will be lost.
  - You are about to drop the column `usersId` on the `Reservations` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Reservations` DROP FOREIGN KEY `Reservations_usersId_fkey`;

-- AlterTable
ALTER TABLE `Reservations` DROP COLUMN `reservedBy`,
    DROP COLUMN `usersId`;

-- AddForeignKey
ALTER TABLE `Reservations` ADD CONSTRAINT `Reservations_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
