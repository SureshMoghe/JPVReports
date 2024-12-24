import {
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { ServiceService } from '../../services/service.service';
  
@Component({
  selector: 'app-farmerregistrationstatus',
  templateUrl: './farmerregistrationstatus.component.html',
  styleUrls: ['./farmerregistrationstatus.component.css']
})

 

export class FarmerregistrationstatusComponent  implements OnInit 
{ 
    constructor() {}
  
    ngOnInit(): void {}
  }