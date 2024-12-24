import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { datePickerConfig } from '../../models/date-picker.models';
import { DatePickerService } from '../../services/date-picker.service';
import { SessionService } from '../../services/session.service';
import { ToasterService } from '../../services/toaster.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
})
export class DatePickerComponent implements OnInit {
  bsConfig: datePickerConfig = this.datePicker.getDatePickerConfig();
  @ViewChild('dpDate') dpDate: ElementRef; 
  @Input() PlaceHolder;
  minDate: Date;
  @Input() maxDate: any;
  @Input() datedisable: boolean =false;

  @Output()
  selectedDateChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() selectedDate: string;

  constructor(
    private datePicker: DatePickerService,
    private session: SessionService,
    private toast: ToasterService,
    private utils: UtilsService
  ) {
   // this.bsConfig.containerClass = this.datePicker.getColor('dark-blue');
    this.bsConfig.containerClass = this.datePicker.getColor('dark-blue');
    this.minDate = this.session.getFromDate();
    if(this.maxDate != 0){
      this.maxDate = this.session.getToDate();
    }
  }

  ngOnInit(): void {}

  onDateChange(): void {
    if (this.dpDate) {
      if (!this.utils.isEmpty(this.selectedDate)) {
        if (this.dpElementValidation(this.dpDate)) {
          this.selectedDate = this.dpDate.nativeElement.value;
          this.selectedDateChange.emit(this.selectedDate);
        } else {
          this.selectedDate = '';
          this.selectedDateChange.emit(this.selectedDate);
          this.toast.warning('Please Enter Valid Date');
        }
      } else {
        this.selectedDate = '';
        this.selectedDateChange.emit(this.selectedDate);
      }
    } else if (!this.selectedDate) {
      this.selectedDate = '';
      this.selectedDateChange.emit(this.selectedDate);
    }
  }

  dpElementValidation(element: ElementRef): boolean {
    if (element) {
      if (element.nativeElement) {
        if (element.nativeElement.value) {
          if (!this.utils.isEmpty(element.nativeElement.value)) {
            if (this.utils.isValidDate(element.nativeElement.value)) {
              return true;
            }
            element.nativeElement.value = '';
          }
        }
      }
    }
    return false;
  }
}
