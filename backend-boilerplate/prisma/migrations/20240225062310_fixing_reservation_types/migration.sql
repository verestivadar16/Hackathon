/*
  Warnings:

  - You are about to drop the column `endDate` on the `Reservations` table. All the data in the column will be lost.
  - You are about to drop the column `programId` on the `Reservations` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Reservations` table. All the data in the column will be lost.
  - You are about to drop the `Programs` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `choosenDate` to the `Reservations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Reservations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deviceId` to the `Reservations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `disturbingFactor` to the `Reservations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endTime` to the `Reservations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reservedBy` to the `Reservations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Reservations` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Reservations` DROP FOREIGN KEY `Reservations_programId_fkey`;

-- DropForeignKey
ALTER TABLE `Reservations` DROP FOREIGN KEY `Reservations_userId_fkey`;

-- AlterTable
ALTER TABLE `Reservations` DROP COLUMN `endDate`,
    DROP COLUMN `programId`,
    DROP COLUMN `startDate`,
    ADD COLUMN `choosenDate` DATETIME(3) NOT NULL,
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `deviceId` VARCHAR(191) NOT NULL,
    ADD COLUMN `disturbingFactor` BOOLEAN NOT NULL,
    ADD COLUMN `endTime` VARCHAR(191) NOT NULL,
    ADD COLUMN `reservedBy` VARCHAR(191) NOT NULL,
    ADD COLUMN `startTime` VARCHAR(191) NOT NULL,
    ADD COLUMN `usersId` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `Programs`;

-- CreateIndex
CREATE UNIQUE INDEX `Users_email_key` ON `Users`(`email`);

-- AddForeignKey
ALTER TABLE `Reservations` ADD CONSTRAINT `Reservations_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `Users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
