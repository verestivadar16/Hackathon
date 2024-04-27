/*
  Warnings:

  - You are about to alter the column `passwordHash` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `LongBlob` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Users` MODIFY `passwordHash` VARCHAR(191) NOT NULL;
