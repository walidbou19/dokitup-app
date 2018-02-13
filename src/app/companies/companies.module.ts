import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { CompaniesComponent } from './companies.component';
import { CompaniesService } from './shared/companies.service';
import { CompaniesFormComponent } from './company-form/company-form.component';
import { CompaniesDetailComponent } from './company-detail/company-detail.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListDocumentsComponent } from './list-documents/list-documents.component';
import { NavBarModule } from '../nav-bar/nav-bar.module';

import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    NavBarModule,
    MaterialModule
  ],
  declarations: [
    CompaniesComponent,
    CompaniesDetailComponent,
    CompaniesFormComponent,
    ListUsersComponent,
    ListDocumentsComponent
  ],
  exports: [
    CompaniesComponent
  ],
  providers: [
      CompaniesService
  ]
})
export class CompaniesModule { }
