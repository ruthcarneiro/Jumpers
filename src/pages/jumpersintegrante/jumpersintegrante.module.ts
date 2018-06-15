import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JumpersIntegrantePage } from './jumpersintegrante';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
    declarations: [
        JumpersIntegrantePage,
    ],
    imports: [
        BrMaskerModule,
        IonicPageModule.forChild(JumpersIntegrantePage),
    ],
})
export class JumpersIntegrantePageModule {}
