import { FormControl, } from '@angular/forms';

export class  GlobalValidator {

    static mailFormat(control: FormControl): ValidationResult {

        let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        if (control && control.value && control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "incorrectMailFormat": true };
        }

        return null;
    }

    static datePtBr(control: FormControl): ValidationResult {

        let REGEXP = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/;

        let testValidDate = (d: string) => {
            let dates = d.split("/");
            let finalDate = dates[2] + "-" + dates[1] + "-" + dates[0];
            return !isNaN(Date.parse(finalDate + "T00:00:00"));
        };

        if (control && control.value && control.value != "" && (control.value.length < 10 || !REGEXP.test(control.value) || !testValidDate(control.value)) ) {
            return { "invalidDate": true };
        }

        return null;
    }

    static compareDates = (dB: Date) => {
        return (control:FormControl) => {

            let REGEXP = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/;

            let testValidDate = (d: string) => {
                let dates = d.split("/");
                let finalDate = dates[2] + "-" + dates[1] + "-" + dates[0];
                return !isNaN(Date.parse(finalDate + "T00:00:00"));
            };

            if (control && control.value && control.value != ""){

                if (control.value.length < 7 || !REGEXP.test(control.value) || !testValidDate(control.value)) {
                    return {"invalidDate": true};
                }

                let dA = GlobalValidator.parseShortTermStringToDate(control.value);

                if(dA.getTime() > dB.getTime()){
                    return {"previousDate": true};
                }
            }

            return null;

        }
    };

    private static parseShortTermStringToDate(s: string){
        let dates = s.split("/");
        let finalDate = dates[2] + "-" + dates[1] + "-" + dates[0];
        return new Date(Date.parse(finalDate + "T00:00:00"));
    }

}

interface ValidationResult {
    [key: string]: boolean;
}