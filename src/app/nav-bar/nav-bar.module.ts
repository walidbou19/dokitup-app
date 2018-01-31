import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
      RouterModule,
      MaterialModule
  ],
    declarations: [
        NavBarComponent
    ],
    exports: [
        NavBarComponent
    ]
})
export class NavBarModule { }
