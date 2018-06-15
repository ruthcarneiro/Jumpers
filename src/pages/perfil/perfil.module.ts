import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilPage } from './perfil';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
    declarations: [
        PerfilPage,
    ],
    imports: [
        BrMaskerModule,
        IonicPageModule.forChild(PerfilPage),
    ],
})
export class PerfilPageModule {}

