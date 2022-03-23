import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDogComponent } from './form-dog/form-dog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormRegisterComponent } from './form-register/form-register.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgToastModule } from 'ng-angular-popup';
import { MoviecardComponent } from './moviecard/moviecard.component';


@NgModule({
  declarations: [
    FormDogComponent,
    FormLoginComponent,
    FormRegisterComponent,
    NavBarComponent,
    MoviecardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([]),
    NgToastModule
  ],
  exports: [FormDogComponent, FormLoginComponent, FormRegisterComponent, NavBarComponent, MoviecardComponent]
})
export class SharedModule { }
