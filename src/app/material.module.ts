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
    MzValidationModule,
    MzSelectModule
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
        MzValidationModule,
        MzSelectModule
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
        MzValidationModule,
        MzSelectModule
    ]
})
export class MaterialModule {}