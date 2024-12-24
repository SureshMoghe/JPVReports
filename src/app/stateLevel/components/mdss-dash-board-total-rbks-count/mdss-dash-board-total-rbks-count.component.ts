import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from '../../services/state.service';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
    selector: 'app-mdss-dash-board-total-rbks-count',
    templateUrl: './mdss-dash-board-total-rbks-count.component.html',
    styleUrls: ['./mdss-dash-board-total-rbks-count.component.css']
})
export class MdssDashBoardTotalRBKsCountComponent implements OnInit {
    CommonList: any[] = [];
    CommonExcelData: any[] = [];

    Total_Report_count = {
        S_NO: "-",
        DISTRICT: "Total",
        RBK: 0,
        TOTAL_VILLAGES: 0,
        TOTAL_WOMEN_FARMERS: 0,
        TOTAL_MILK_POURING_WOMEN_FARMERS: 0


    }
    @ViewChild(DataTableDirective, { static: false })
    dtElement: DataTableDirective;
    dtOptions: DataTables.Settings = this.utils.dataTableOptions();
    dtTrigger: Subject<any> = new Subject();

    constructor(private utils: UtilsService,
        private spinner: NgxSpinnerService,
        private toast: ToasterService,
        private session: SessionService,
        private stateAPI: StateService,
        private router: Router

    ) { }

    ngOnInit(): void {
        this.LoadReports();
    }

    async LoadReports(): Promise<void> {
        try {
            debugger;
            this.CommonList = [];
            this.CommonExcelData = [];
            this.Total_Report_count = {
                S_NO: "-",
                DISTRICT: "Total",
                RBK: 0,
                TOTAL_VILLAGES: 0,
                TOTAL_WOMEN_FARMERS: 0,
                TOTAL_MILK_POURING_WOMEN_FARMERS: 0


            }
            const req = {
                type: "118"
            }
            this.spinner.show();
            debugger;
            const res = await this.stateAPI.MdssDashBoardsCountsGet(req);
            if (res.success) {
                this.CommonList = [];
                this.CommonExcelData = [];
                this.Total_Report_count = {
                    S_NO: "--",
                    DISTRICT: "TOTAL",
                    RBK: 0,
                    TOTAL_VILLAGES: 0,
                    TOTAL_WOMEN_FARMERS: 0,
                    TOTAL_MILK_POURING_WOMEN_FARMERS: 0

                }
                this.CommonList = res.result;

                for (var i = 0; i < this.CommonList.length; i++) {

                    this.Total_Report_count.RBK += parseInt(this.CommonList[i].TOTAL_RBKS);
                    this.Total_Report_count.TOTAL_VILLAGES += parseInt(this.CommonList[i].TOTAL_VILLAGES);
                    this.Total_Report_count.TOTAL_WOMEN_FARMERS += parseInt(this.CommonList[i].TOT_FARMERS);
                    this.Total_Report_count.TOTAL_MILK_POURING_WOMEN_FARMERS += parseInt(this.CommonList[i].ELG_FARMERS);
                    let singleRow =
                    {
                        S_NO: i + 1,
                        DISTRICT: this.CommonList[i].DISTRICT,
                        RBK: this.CommonList[i].TOTAL_RBKS,
                        TOTAL_VILLAGES: this.CommonList[i].TOTAL_VILLAGES,
                        TOTAL_WOMEN_FARMERS: this.CommonList[i].TOT_FARMERS,
                        TOTAL_MILK_POURING_WOMEN_FARMERS: this.CommonList[i].ELG_FARMERS,

                    }
                    this.CommonExcelData.push(singleRow);
                }
                this.CommonExcelData.push(this.Total_Report_count);
                this.spinner.hide();
                this.rerender();
            }
            else {
                this.spinner.hide();
                this.toast.info(res.message);
            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }

    btnBack(): void {
        this.router.navigate(['/state/DashBoardsForMdssRegistartion']);
    }

    btnExcel(): void {
        this.utils.JSONToCSVConvertor(
            this.CommonExcelData,
            'Total RBKs Report ' + this.session.dpTodayDate,
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
