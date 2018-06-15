import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {LabelGenerator} from "./labelgenerator/labelgenerator";

@NgModule({
    declarations: [
        LabelGenerator,
    ],
    imports: [IonicModule],
    exports: [
        LabelGenerator,
    ]
})
export class CustomComponentsModule {
}
