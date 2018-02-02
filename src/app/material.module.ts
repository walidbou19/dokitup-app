import { NgModule } from '@angular/core';

import {
    MzNavbarModule,
    MzButtonModule,
    MzInputModule,
    MzDropdownModule,
    MzIconModule,
    MzIconMdiModule,
    MzCardModule
} from 'ng2-materialize';

@NgModule({
    imports: [
        MzNavbarModule,
        MzButtonModule,
        MzInputModule,
        MzDropdownModule,
        MzIconModule,
        MzIconMdiModule,
        MzCardModule
    ],
    exports: [
        MzNavbarModule,
        MzButtonModule,
        MzInputModule,
        MzDropdownModule,
        MzIconModule,
        MzIconMdiModule,
        MzCardModule
    ]
})
export class MaterialModule {}