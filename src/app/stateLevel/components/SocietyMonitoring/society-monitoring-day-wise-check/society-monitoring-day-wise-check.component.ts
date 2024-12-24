import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
    selector: 'app-society-monitoring-day-wise-check',
    templateUrl: './society-monitoring-day-wise-check.component.html',
    styleUrls: ['./society-monitoring-day-wise-check.component.css']
})
export class SocietyMonitoringDayWiseCheckComponent implements OnInit {
    input: any;
    districtId: any;
    districtName: any;
    SelectDate: any;
    type: any;
 
    constructor(
        private utils: UtilsService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        route.queryParams.subscribe((params) => (this.input = params['request']));
    }

    ngOnInit(): void {
        const decString = JSON.parse(this.utils.decrypt(this.input));
        console.log(decString);
        this.districtId = decString.districtId;
        this.districtName = decString.districtName;
        this.SelectDate = decString.SelectDate;
        this.type = decString.type;



    }

    btnBack(): void {



        this.router.navigate(['/state/SocietyMonitoringReport'], {

        });


    }




}
