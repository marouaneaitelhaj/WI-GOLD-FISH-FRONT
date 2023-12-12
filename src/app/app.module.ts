import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
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
import { RadioButtonModule } from 'primeng/radiobutton';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FishPageComponent,
    CompetitionPageComponent,
    ModalComponent,
    CompetitionFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
