import { Component, OnInit } from '@angular/core';
import { until } from 'protractor';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
    selector: 'app-aadhar-input',
    templateUrl: './aadhar-input.component.html',
    styleUrls: ['./aadhar-input.component.css']
})
export class AadharInputComponent implements OnInit {

    constructor(private utils: UtilsService) { }

    ngOnInit(): void {
    }


    aadharNumber: string = '';
    maskedAadhar: string = '';

    onInput(event: Event) {
        debugger;
        this.aadharNumber = this.utils.ValueGet(event);

    }
    onFocus(): void {
        debugger;
        this.maskedAadhar = this.aadharNumber;
    }
    onBlur(): void {
        this.maskedAadhar = this.utils.maskAadharNumber(this.aadharNumber);  // Mask the Aadhar number on blur
    }

}
