import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthserviceService } from './services/authservice.service';
import { TokenInterceptorServiceService } from './services/token-interceptor-service.service';
import { FormsModule } from '@angular/forms';
import { TokenStorageServiceService } from './services/token-storage-service.service';
import { AuthGuard } from './auth.guard';
import { ListComponent } from './components/list/list.component';
import { AdminRegisterComponent } from './components/admin-register/admin-register.component';
import { GeneralEventComponent } from './componentsEvent/general-event/general-event.component';
import { GeneralEventServiceService } from './servicesEvent/general/general-event-service.service';
import { SpecialEventServiceService } from './servicesEvent/Special/special-event-service.service';
import { CreateEventComponent } from './componentsEvent/create-event/create-event.component';
import { GeneralEventDetailsComponent } from './componentsEvent/general-event-details/general-event-details.component';
import { TicketPrintingComponent } from './componentsEvent/ticket-printing/ticket-printing.component';
import { FilterPipePipe } from './filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    ListComponent,
    AdminRegisterComponent,
    GeneralEventComponent,
    CreateEventComponent,
    GeneralEventDetailsComponent,
    TicketPrintingComponent,
    FilterPipePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthserviceService,GeneralEventServiceService,SpecialEventServiceService,
    AuthGuard,TokenStorageServiceService,{
    provide: HTTP_INTERCEPTORS,
    useClass:TokenInterceptorServiceService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
