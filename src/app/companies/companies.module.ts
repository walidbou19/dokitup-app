import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { CompaniesComponent } from './companies.component';
import { CompaniesService } from './shared/companies.service';
//import { UserFormComponent } from './user-form/user-form.component';
import { CompaniesDetailComponent } from './company-detail/company-detail.component';

import { NavBarModule } from '../nav-bar/nav-bar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    NavBarModule
  ],
  declarations: [
    CompaniesComponent,
    CompaniesDetailComponent
  ],
  exports: [
    CompaniesComponent
  ],
  providers: [
      CompaniesService
  ]
})
export class CompaniesModule { }
