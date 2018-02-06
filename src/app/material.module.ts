import { NgModule } from '@angular/core';

import {
    MzNavbarModule,
    MzButtonModule,
    MzInputModule,
    MzDropdownModule,
    MzIconModule,
    MzIconMdiModule,
    MzCardModule,
    MzCollectionModule
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
        MzCollectionModule
    ],
    exports: [
        MzNavbarModule,
        MzButtonModule,
        MzInputModule,
        MzDropdownModule,
        MzIconModule,
        MzIconMdiModule,
        MzCardModule,
        MzCollectionModule
    ]
})
export class MaterialModule {}