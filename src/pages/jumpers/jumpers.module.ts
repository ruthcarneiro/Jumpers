import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JumpersPage } from './jumpers';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
    declarations: [
        JumpersPage,
    ],
    imports: [
        BrMaskerModule,
        IonicPageModule.forChild(JumpersPage),
    ],
})
export class JumpersPageModule {}

