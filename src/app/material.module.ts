import { NgModule } from '@angular/core';

import {
    MzNavbarModule,
    MzButtonModule,
    MzInputModule,
    MzDropdownModule,
    MzIconModule,
    MzIconMdiModule,
    MzCardModule,
    MzCollectionModule,
    MzValidationModule
} from 'ng2-materialize';

@NgModule({
    imports: [
        MzNavbarModule,
        MzButtonModule,
        MzInputModule,
        MzDropdownModule,
        MzIconModule,
        MzIconMdiModule,
        MzCardModule,
        MzCollectionModule,
        MzValidationModule
    ],
    exports: [
        MzNavbarModule,
        MzButtonModule,
        MzInputModule,
        MzDropdownModule,
        MzIconModule,
        MzIconMdiModule,
        MzCardModule,
        MzCollectionModule,
        MzValidationModule
    ]
})
export class MaterialModule {}