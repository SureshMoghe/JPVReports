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
    selector: 'app-mdss-dash-board-promoter-added-count',
    templateUrl: './mdss-dash-board-promoter-added-count.component.html',
    styleUrls: ['./mdss-dash-board-promoter-added-count.component.css']
})
export class MdssDashBoardPromoterAddedCountComponent implements OnInit {
    CommonList: any[] = [];
    CommonExcelData: any[] = [];
    SecondCommonList: any[] = [];
    SecondCommonExcelData: any[] = [];
    @ViewChild(DataTableDirective, { static: false })
    dtElement: DataTableDirective;
    dtOptions: DataTables.Settings = this.utils.dataTableOptions();
    dtTrigger: Subject<any> = new Subject();

    constructor(private utils: UtilsService,
        private spinner: NgxSpinnerService,
        private toast: ToasterService,
        private stateAPI: StateService,
        private router: Router,
        private session: SessionService
    ) { }

    ngOnInit(): void {
        this.LoadReports();
    }

    async LoadReports(): Promise<void> {
        try {
            debugger;
            this.CommonList = [];
            this.CommonExcelData = [];
            const req = {
                type: "106"
            }
            this.spinner.show();
            debugger;
            const res = await this.stateAPI.MdssDashBoardsCountsGet(req);
            if (res.success) {
                this.CommonList = [];
                this.CommonExcelData = [];
                this.CommonList = res.result;

                for (var i = 0; i < this.CommonList.length; i++) {
                    let singleRow =
                    {
                        S_NO: i + 1,
                        DISTRICT: this.CommonList[i].DISTRICT,
                        DIVISION: this.CommonList[i].DIVISION_NAME,
                        MANDAL: this.CommonList[i].MANDAL_NAME,
                        NAME_OF_RBK: this.CommonList[i].RBK_NAME,
                        RBK_CODE: this.CommonList[i].RBK_CODE,
                        NO_OF_PROMOTERS_ADDED: this.CommonList[i].NO_OF_PROMOTERS_ADDED,

                    }
                    this.CommonExcelData.push(singleRow);
                }
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

    async btnGetDetails(obj: any): Promise<void> {
        try {


            debugger;
            this.SecondCommonList = [];
            this.SecondCommonExcelData = [];
            const req = {
                type: "1006",
                rbk: obj.RBK_CODE
            }
            this.spinner.show();
            debugger;
            const res = await this.stateAPI.MdssDashBoardsCountsGetData(req);
            if (res.success) {
                this.SecondCommonList = [];
                this.SecondCommonExcelData = [];
                this.SecondCommonList = res.result;

                for (var i = 0; i < this.SecondCommonList.length; i++) {
                    let singleRow =
                    {
                        S_NO: i + 1,
                        NAME_OF_RBK: this.SecondCommonList[i].RBK_NAME,
                        RBK_CODE: this.SecondCommonList[i].RBK_CODE,
                        SOCIETY_CODE: this.SecondCommonList[i].SOCIETY_CODE,
                        SOCIETY_NAME: this.SecondCommonList[i].SOCIETY_NAME,
                        NAME_OF_THE_PROMOTER: this.SecondCommonList[i].PROMOTER_NAME,
                        DESIGNATION: this.SecondCommonList[i].DESIGNATION
                    }
                    this.SecondCommonExcelData.push(singleRow);
                }
                this.spinner.hide();
                this.utils.JSONToCSVConvertor(
                    this.SecondCommonExcelData,
                    'Details Of Promoters Added' + '(' + obj.RBK_NAME + ')' + ' Report ' + this.session.dpTodayDate,
                    true
                );

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
            'Promoters added Report ' + + this.session.dpTodayDate,
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
