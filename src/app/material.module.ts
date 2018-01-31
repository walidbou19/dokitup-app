import { NgModule } from '@angular/core';

import {
    MzNavbarModule,
    MzButtonModule,
    MzInputModule,
    MzDropdownModule,
    MzIconModule,
    MzIconMdiModule
} from 'ng2-materialize';

@NgModule({
    imports: [
        MzNavbarModule,
        MzButtonModule,
        MzInputModule,
        MzDropdownModule,
        MzIconModule,
        MzIconMdiModule
    ],
    exports: [
        MzNavbarModule,
        MzButtonModule,
        MzInputModule,
        MzDropdownModule,
        MzIconModule,
        MzIconMdiModule
    ]
})
export class MaterialModule {}