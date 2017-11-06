import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RegistrationDataService } from './registration-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import { BooleanToTextPipe } from './BooleanToText.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    RegistrationListComponent,
    BooleanToTextPipe,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [RegistrationDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
