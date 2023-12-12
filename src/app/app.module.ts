import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FishPageComponent } from './pages/fish-page/fish-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CompetitionPageComponent } from './pages/competition-page/competition-page.component';
import { TableModule } from 'primeng/table';
import { ModalComponent } from './components/modal/modal.component';
import { ButtonModule } from 'primeng/button';
import { CompetitionFormComponent } from './components/competition-form/competition-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { PaginatorModule } from 'primeng/paginator';

import { RadioButtonModule } from 'primeng/radiobutton';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CardCompetitionComponent } from './components/card-competition/card-competition.component';
import { PaginationComponent } from './components/pagination/pagination.component';
@NgModule({
  declarations: [
    AppComponent,
    FishPageComponent,
    CompetitionPageComponent,
    ModalComponent,
    CompetitionFormComponent,
    NavbarComponent,
    HomepageComponent,
    CardCompetitionComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PaginatorModule,
    ReactiveFormsModule,
    TableModule,
    CardModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
