import { DeviceDTO } from "./device-dto"

export interface createReservationDTO {
    roomId: string | undefined,
    userId: string,
    choosenDate: string | null | undefined | Date,
    description: string,
    deviceId: string,
    disturbingFactor: boolean,
    endTime: string,
    startTime: string
    devicesId: string[]; // Array of device IDs
}