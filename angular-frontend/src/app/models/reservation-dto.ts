export interface ReservationDTO {
  id: string;
  roomId: string;
  startTime: string;
  endTime: string;
  userId: string;
  deviceId: string;
  reservedBy: string;
  choosenDate: Date;
  disturbingFactor: boolean;
  description: string;
  // intervalList: string[];
}
