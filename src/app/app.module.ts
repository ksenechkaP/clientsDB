import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { ClientsService } from './services/clients.service';
import { EditClientComponent } from './components/edit-client-page/edit-client-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ClientsListComponent,
    EditClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [ClientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
