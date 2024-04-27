import {
  Rooms,
  Users,
  Neighbours,
  Devices,
  Reservations,
} from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import { users } from './users';
import { rooms } from './rooms';
import { devices } from './devices';
import { reservations } from './reservations';
import { neighbours } from './neighbours';
const prisma = new PrismaClient();


async function main(): Promise<void> {
  try {
    /*const roomArray: Rooms[] = Array(10).fill(null).map(generateRandomRoom);
    await prisma.rooms.createMany({data : roomArray});

    const programArray: Programs[] = Array(10)
      .fill(null)
      .map(generateRandomProgram);
    await prisma.programs.createMany({ data: programArray });

    const userArray: Users[] = Array(10).fill(null).map(generateRandomUser);
    await prisma.users.createMany({ data: userArray });

    const neighbourArray: Neighbours[] = Array(1)
      .fill(null)
      .map(generateRandomNeighbour);
    await prisma.neighbours.createMany({ data: neighbourArray });

    const deviceArray: Devices[] = Array(1)
      .fill(null)
      .map(generateRandomDevice);
    await prisma.devices.createMany({ data: deviceArray });

    const reservationArray: Reservations[] = Array(1).fill(null).map(generateRandomReservation);
    await prisma.reservations.createMany({data : reservationArray});*/
    for (let user of users) {
      await prisma.users.create({
        data: user
      })
    }
    for (let room of rooms) {
      await prisma.rooms.create({
        data: room
      })
    }
    for (let device of devices) {
      await prisma.devices.create({
        data: device
      })
    }

    for (let reservation of reservations) {
      await prisma.reservations.create({
        data: reservation,
      });
    }
    for (let neighbour of neighbours) {
      await prisma.neighbours.create({
        data: neighbour,
      });
    }

    console.log('heyy');
    // Create neighbours

    console.log('Mock data inserted successfully.');
  } catch (error) {
    console.error('Error inserting mock data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
function getRandomTimestamp(): number {
  const start = new Date(2022, 0, 1).getTime(); // Start date: 2022.01.01
  const end = new Date().getTime(); // Current date as end date
  return Math.floor(Math.random() * (end - start) + start);
}
