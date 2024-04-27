// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { AddRoomPageComponent } from './pages/add-room-page/add-room-page.component';
import { RoomListComponent } from './pages/room-list-page/room-list.component';
import { AddDevicePageComponent } from './pages/add-device-page/add-device-page.component';
import { DeviceListPageComponent } from './pages/device-list-page/device-list-page.component';
import { ReservationListPageComponent } from './pages/reservation-list-page/reservation-list-page.component';
import { AddReservationPageComponent } from './pages/add-reservation-page/add-reservation-page.component';
import { RoomDetailedPageComponent } from './pages/room-detailed-page/room-detailed-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TaskManagementPageComponent } from './pages/task-management-page/task-management-page.component';
import { AccessDeniedComponent } from './errors/access-denied/access-denied.component';
import { AddUserPageComponent } from './pages/add-user-page/add-user-page.component';

export const routes: Routes = [
  { path: 'auth/login', component: LoginPageComponent },
  { path: '', component: DashboardPageComponent },
  { path: 'add-room', component: AddRoomPageComponent },
  { path: 'rooms', component: RoomListComponent },
  // { path: 'room-detail/:id', component: RoomDetailPageComponent },
  { path: 'add-device', component: AddDevicePageComponent },
  { path: 'devices', component: DeviceListPageComponent },
  { path: 'reservations', component: ReservationListPageComponent },
  { path: 'add-reservation', component: AddReservationPageComponent },
  { path: 'roomdetailed', component: RoomDetailedPageComponent },
  { path: 'error', component: PageNotFoundComponent },
  { path: 'tasks', component: TaskManagementPageComponent },
  { path: 'forbidden', component: AccessDeniedComponent },
  { path: 'add-user', component: AddUserPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Use forRoot when you provide the main routes
  exports: [RouterModule],
})
export class AppRoutingModule { }
