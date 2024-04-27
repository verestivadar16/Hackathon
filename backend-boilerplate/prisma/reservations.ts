export const reservations = [
  {
    id: "1",
    roomId: "1", // Corresponds to the id of the "Nagyterem" room
    startTime: "09:00",
    endTime: "11:00",
    userId: "1",
    choosenDate: new Date("2024-03-01"),
    disturbingFactor: false,
    description: "Meeting with client",
    // intervalList: ["09:00-09:30", "10:00-11:00"]
  },
  {
    id: "2",
    roomId: "2", // Corresponds to the id of the "Kisterem" room
    startTime: "14:00",
    endTime: "15:30",
    userId: "1",
    choosenDate: new Date("2024-03-02"),
    disturbingFactor: true,
    description: "Team brainstorming session",
    // intervalList: ["14:00-14:30", "15:00-15:30"]
  },
  {
    id: "3",
    roomId: "3", // Corresponds to the id of the "Oszlopos terem" room
    startTime: "10:30",
    endTime: "12:00",
    userId: "1",
    choosenDate: new Date("2024-03-03"),
    disturbingFactor: false,
    description: "Training session",
    // intervalList: ["10:30-11:00", "11:30-12:00"]
  }
];
