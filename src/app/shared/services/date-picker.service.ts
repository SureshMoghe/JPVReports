import { Injectable } from '@angular/core';
import { datePickerConfig } from '../models/date-picker.models';

@Injectable({
  providedIn: 'root'
})
export class DatePickerService {

  constructor() { }
  getDatePickerConfig(): any {
    const bsConfig: datePickerConfig = {
      dateInputFormat: 'DD-MM-YYYY',
      containerClass: 'theme-default',
      selectFromOtherMonth: true,
      isAnimated: true,
      adaptivePosition: true,
      showWeekNumbers: false,
      returnFocusToInput: true,
      isDisabled: true,
      showClearButton: true,
      clearButtonLabel: 'Clear',
      clearPosition: 'right',
    };

    return bsConfig;
  }

  getColor(color = null): string {
    if (color === 'green') {
      return 'theme-green';
    } else if (color === 'blue') {
      return 'theme-blue';
    } else if (color === 'dark-blue') {
      return 'theme-dark-blue';
    } else if (color === 'red') {
      return 'theme-red';
    } else if (color === 'orange') {
      return 'theme-orange';
    } else {
      return 'theme-default';
    }
  }
  invalidNumbers = [
    '6666666666',
    '7777777777',
    '8888888888',
    '9999999999',
    '9848022338',
    '7111111111',
    '9100000000',
    '9800000000',
    '9000000000',
    '9222222222',
    '9888888888',
    '9848012345',
    '9999999990',
    '9123456789',
    '9876543210',
    '9111111111',
];
}
