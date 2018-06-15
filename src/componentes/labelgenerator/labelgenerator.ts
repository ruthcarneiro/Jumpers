import {Component, Input} from '@angular/core';

@Component({
    selector: 'label-generator',
    templateUrl: 'labelgenerator.html'
})
export class LabelGenerator {
    @Input() data: Array<Array<{ title: string, descricao: string}>>;

    executeClick(props: any) {
        if (props && props.click) {
            props.click();
        }
    }

    getPropClassName(props: any){
        if(props && props.classname){
            return props.classname;
        }else{
            return "";
        }
    }

}