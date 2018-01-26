import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { UsersComponent } from './users/users.component';
import {UserFormComponent} from './users/user-form/user-form.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: UsersComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
    { path: 'users/new', component: UserFormComponent},
    { path: 'users/:id', component: UserFormComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
