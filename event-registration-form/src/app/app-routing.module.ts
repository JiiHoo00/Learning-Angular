import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';

const routes: Routes = [
  { path: 'list', component: RegistrationListComponent },
  { path: 'new', component: RegistrationFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
