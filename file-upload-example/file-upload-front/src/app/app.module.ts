import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import the ng2-file-upload directive so we can add it to our declarations.
import { FileSelectDirective } from 'ng2-file-upload';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, FileSelectDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
