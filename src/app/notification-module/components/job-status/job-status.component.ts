import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from 'src/app/stateLevel/services/state.service';

@Component({
    selector: 'app-job-status',
    templateUrl: './job-status.component.html',
    styleUrls: ['./job-status.component.css']
})
export class JobStatusComponent implements OnInit {

    jobDetailsList = [];
    excelData = [];

    @ViewChild(DataTableDirective, { static: false })
    dtElement: DataTableDirective;

    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();

    constructor(
        private spinner: NgxSpinnerService,
        private toast: ToasterService,
        private utils: UtilsService,
        private logger: LoggerService,
        private session: SessionService,
        private stateapi: StateService,
    ) { }

    ngOnInit(): void {
        debugger;
        this.session.masterId = sessionStorage.getItem('masterId');
        this.loadReport();
    }

    async loadReport(): Promise<void> {
        try {

            const req = {
                type: "27",
                MASTER_ID: this.session.masterId,
            };

            this.spinner.show();
            const res = await this.stateapi.NotificationsForJobDetails(req);
            console.log(res);
            if (res.success) {
                this.jobDetailsList = res.result;

                for (let i = 0; i < this.jobDetailsList.length; i++) {
                    let obj = {
                        S_NO: i + 1,
                        REGISTRATION_ID: this.jobDetailsList[i].REGISTRATION_ID,
                        DESIGNATION: this.jobDetailsList[i].DESIGNATION,
                        POSITION: this.jobDetailsList[i].POSITION,
                        APPLIED_DATE: this.jobDetailsList[i].APPLY_DATE,
                        STATUS: this.jobDetailsList[i].STATUS
                    }
                    this.excelData.push(obj)

                }

            } else {

                this.toast.info(res.message);
            }
            this.rerender();
            this.spinner.hide();
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }

    btnExcel(): void {
        this.utils.JSONToCSVConvertor(
            this.excelData,
            'Job Details Status',
            true
        );
    }

    ngOnDestroy(): void {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }

    ngAfterViewInit(): void {
        this.dtTrigger.next();
    }

    rerender(): void {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            // Destroy the table first
            dtInstance.destroy();
            // Call the dtTrigger to rerender again
            this.dtTrigger.next();
        });
    }




}
