import {
    AfterViewInit,
    Component,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { VillageMeetingService } from '../../services/village-meeting.service';
import { Duplex } from 'stream';

@Component({
    selector: 'app-village-meeting-functionaries',
    templateUrl: './village-meeting-functionaries.component.html',
    styleUrls: ['./village-meeting-functionaries.component.css'],
})
export class VillageMeetingFunctionariesComponent
    implements OnInit, OnDestroy, AfterViewInit, OnChanges {
    input: any;

    @Input() districtId: any;
    @Input() districtName: any;
    @Input() mentorId: any;
    @Input() mentorName: any;
    @Input() rbkId: any;
    @Input() rbkName: any;
    @Input() villageId: any;
    @Input() villageName: any;
    @Input() fromDate: any;
    @Input() toDate: any;

    functionaryDetails = [];
    excelData = [];

    @ViewChild(DataTableDirective, { static: false })
    dtElement: DataTableDirective;

    dtOptions: DataTables.Settings = this.utils.dataTableOptions();
    dtTrigger: Subject<any> = new Subject();

    constructor(
        private spinner: NgxSpinnerService,
        private toast: ToasterService,
        private villageMeetingsAPI: VillageMeetingService,
        private utils: UtilsService,
        private logger: LoggerService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        route.queryParams.subscribe((params) => (this.input = params['request']));
    }

    ngOnInit(): void {
        // if (
        //   this.districtId === undefined ||
        //   this.districtId === '' ||
        //   this.districtId === null
        // ) {
        //   return;
        // }
        // if (
        //   this.mentorId === undefined &&
        //   this.mentorId === '' &&
        //   this.mentorId === null
        // ) {
        //   return;
        // }
        // if (this.rbkId === undefined && this.rbkId === '' && this.rbkId === null) {
        //   return;
        // }
        // this.loadReport();
    }
    ngOnChanges(): void {
        if (
            this.districtId === undefined ||
            this.districtId === '' ||
            this.districtId === null
        ) {
            return;
        }
        if (
            this.mentorId === undefined &&
            this.mentorId === '' &&
            this.mentorId === null
        ) {
            return;
        }
        if (this.rbkId === undefined && this.rbkId === '' && this.rbkId === null) {
            return;
        }
        this.loadReport();
    }

    async loadReport(): Promise<void> {
        try {
            debugger;
            const req = {
                districtId: this.districtId,
                mentorId: this.mentorId,
                rbkId: this.rbkId,
                villageId: this.villageId,
                fromDate: this.fromDate,
                toDate: this.toDate,
            };
            this.spinner.show();
            const res = await this.villageMeetingsAPI.milkCollectionFuncReport(req);
            if (res.success) {
                this.excelData = [];
                this.functionaryDetails = res.result;
                for (let i = 0; i < this.functionaryDetails.length; i++) {
                    let singleRow = {
                        S_NO: i + 1,
                        VILLAGE_NAME: this.functionaryDetails[i].VILLAGE_NAME,
                        ROUTE_NAME: this.functionaryDetails[i].ROUTE_NAME,
                        ROUTE_POSITION: this.functionaryDetails[i].ROUTE_POSITION,
                        VILLAGE_CLASIFICATION: this.functionaryDetails[i]
                            .VILLAGE_CLASIFICATION,
                        NETWORK_WITH_MAX_COV: this.functionaryDetails[i]
                            .NETWORK_WITH_MAX_COV,
                        MILK_PRODUCTION_PER_DAY: this.functionaryDetails[i]
                            .MILK_PRODUCTION_PER_DAY,
                        ANIMAL_HUSB_ASSI_NAME: this.functionaryDetails[i]
                            .ANIMAL_HUSB_ASSI_NAME,
                        ANIMAL_HUSB_ASSI_MOBILENO: this.functionaryDetails[i]
                            .ANIMAL_HUSB_ASSI_MOBILENO,
                        DIGITAL_ASSI_NAME: this.functionaryDetails[i].DIGITAL_ASSI_NAME,
                        DIGITAL_ASSI_MOBILE_NO: this.functionaryDetails[i]
                            .DIGITAL_ASSI_MOBILE_NO,
                        VILL_ANIMATOR_NAME_SERPDEPT: this.functionaryDetails[i]
                            .VILL_ANIMATOR_NAME_SERPDEPT,
                        VILL_ANIMATOR_MOBILENO: this.functionaryDetails[i]
                            .VILL_ANIMATOR_MOBILENO,
                        WELLFARE_ASSI_NAME: this.functionaryDetails[i].WELLFARE_ASSI_NAME,
                        WELLFARE_ASSI_MNO: this.functionaryDetails[i].WELLFARE_ASSI_MNO,
                    };

                    this.excelData.push(singleRow);
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
            'village Meeting Functionaries Level Report',
            true
        );
    }

    async btnPDF(): Promise<void> {
        try {
            const req = {
                districtId: this.districtId,
                mentorId: this.mentorId,
                rbkId: this.rbkId,
                villageId: this.villageId,
                fromDate: this.fromDate,
                toDate: this.toDate,
            };
            const fileName = 'FunctionariesVillageMeetingReport';
            let basePDF = '';
            this.spinner.show();
            const res = await this.villageMeetingsAPI.milkCollectionFuncVillageMeetingPDFReport(
                req
            );
            if (res.success) {
                basePDF = res.result;
                this.utils.downloadPdfFile(basePDF, fileName);
            } else {
                this.toast.info(res.message);
            }
            this.spinner.hide();
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
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
