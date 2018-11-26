import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Router, Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ListComponent } from './components/list/list.component';
import { AdminRegisterComponent } from './components/admin-register/admin-register.component';
import { GeneralEventComponent } from './componentsEvent/general-event/general-event.component';
import { CreateEventComponent } from './componentsEvent/create-event/create-event.component';
import { GeneralEventDetailsComponent } from './componentsEvent/general-event-details/general-event-details.component';
import { TicketPrintingComponent } from './componentsEvent/ticket-printing/ticket-printing.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dash', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'generalEvent', component: GeneralEventComponent},
  {path: 'ticket/:string/:id', component: TicketPrintingComponent, canActivate: [AuthGuard]},

  {path: 'list', component: ListComponent, canActivateChild: [AuthGuard],
  children: [{path: '',component: HomeComponent}]},

  {path: 'event-details/:id', component: GeneralEventDetailsComponent},

  {path: 'createGeneralEvent', component: CreateEventComponent, canActivateChild: [AuthGuard],
  children: [{path: '',component: HomeComponent}]},

  {path: 'admin', component: AdminRegisterComponent, canActivateChild: [AuthGuard],
  children: [{path: '',component: HomeComponent}]},
]

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
