import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { NotFoundComponent } from './not-found/not-found.component';

import { UsersComponent } from './users/users.component';
import {UserFormComponent} from './users/user-form/user-form.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: UsersComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'users/new', component: UserFormComponent},
  { path: 'users/:id', component: UserFormComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: 'not-found' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
