import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from 'src/app/stateLevel/services/state.service';

@Component({
  selector: 'app-route-map-state-level',
  templateUrl: './route-map-state-level.component.html',
  styleUrls: ['./route-map-state-level.component.css']
})
export class RouteMapStateLevelComponent implements OnInit {

 // Accessing HTML Element
 @ViewChild('mapContainer', { static: true }) gmap: ElementRef;

 districtList = [];
 districtId  = '';
 routeDetailsList = [];

 constructor(
   private spinner: NgxSpinnerService,
   private toast: ToasterService,
   private router: Router,
   private stateAPI: StateService,
   private utils: UtilsService,
   private logger: LoggerService
 ) {}

 ngOnInit(): void {
   this.loadDistricts();
 }

 loadDistricts(): void {
  this.spinner.show();
  this.stateAPI
    .districtList()
    .then((res: any) => {
      if (res.success) {
        this.districtList = res.result;
        this.districtId = this.districtList[0].DISTRICT_ID;
        this.onDistrictChange();
      } else {
        this.toast.info(res.message);
      }
      this.spinner.hide();
    })
    .catch((error: any) => {
      this.spinner.hide();
      this.utils.catchResponse(error);
    });
}
 onDistrictChange(): void {
   this.routeDetailsList = [];
   if (this.districtId == '') {
     return;
   }
   const req = {
    districtId : this.districtId
   };
   this.spinner.show();
   this.stateAPI
     .routeDetailsByDistrictId(req)
     .then((res: any) => {
       if (res.success) {
         this.routeDetailsList = res.result;
       } else {
         this.toast.info(res.message);
       }
       this.spinner.hide();
     })
     .catch((error: any) => {
       this.spinner.hide();
       this.utils.catchResponse(error);
     });
 }


}
