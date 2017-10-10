import { RegistrationDataService } from './registration-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [RegistrationDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
