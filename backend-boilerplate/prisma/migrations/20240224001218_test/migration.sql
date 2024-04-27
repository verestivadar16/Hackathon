/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Devices` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Neighbours` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Programs` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Reservations` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Rooms` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Devices_id_key` ON `Devices`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Neighbours_id_key` ON `Neighbours`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Programs_id_key` ON `Programs`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Reservations_id_key` ON `Reservations`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Rooms_id_key` ON `Rooms`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Users_id_key` ON `Users`(`id`);
