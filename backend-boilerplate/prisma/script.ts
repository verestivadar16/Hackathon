/*import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getAllRoomsData() {
  try {
    const roomsData = await prisma.rooms.findMany({
      include: {
        neighbours: true,
        reservations: true,
      },
    });
    
    console.log(roomsData);
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

getAllRoomsData();
*/
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getAllRoomsData() {
  try {
    const roomsData = await prisma.rooms.findMany();

    console.log('Rooms:');
    console.log(roomsData);
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

getAllRoomsData();
