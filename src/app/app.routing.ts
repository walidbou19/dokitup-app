import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';

import { AuthGuard } from './_guards/index';
import { NotFoundComponent } from './not-found/not-found.component';

import { UsersComponent } from './users/users.component';
import { CompaniesComponent } from './companies/companies.component';
import {UserFormComponent} from './users/user-form/user-form.component';
import {CompaniesDetailComponent} from './companies/company-detail/company-detail.component';
import {ListUsersComponent} from './companies/list-users/list-users.component';
import { CompaniesFormComponent } from './companies/company-form/company-form.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: CompaniesComponent, canActivate: [AuthGuard] },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'users/new', component: UserFormComponent},
  { path: 'users/:id', component: UserFormComponent, canActivate: [AuthGuard]},
  { path: 'company/:id', component: CompaniesDetailComponent, canActivate: [AuthGuard]},
  { path: 'company-form/:id', component: CompaniesFormComponent, canActivate: [AuthGuard]},
  { path: 'list-users/:id', component: ListUsersComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: 'not-found' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
