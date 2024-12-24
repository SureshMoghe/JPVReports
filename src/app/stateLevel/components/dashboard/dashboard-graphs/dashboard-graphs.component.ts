import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { DashboardService } from 'src/app/stateLevel/services/dashboard.service';
import {
    DashedLineChartOptions,
    SemiDounutOptions,
    StbChartOptions,
} from './../../../models/apex-charts';
import { debug } from 'console';

@Component({
    selector: 'app-dashboard-graphs',
    templateUrl: './dashboard-graphs.component.html',
    styleUrls: ['./dashboard-graphs.component.css'],
})
export class DashboardGraphsComponent implements OnInit, OnChanges {
    // tslint:disable-next-line: no-output-on-prefix
    @Output() onReportsClickChange = new EventEmitter<any>();

    chartColors = [



        '#556B2F',
        '#008B8B',
        '#DAA520',
        '#66CDAA',





        '#008FFB',
        '#00E396',
        '#FF4560', //
        '#775DD0',
        '#03A9F4',
        '#449DD1'
        // '#D7263D',
        // '#662E9B',
        // '#5C4742',
        // '#A300D6',
    ];
    curdate: any;
    @Input() Selected_Date: any;
    @Input() districtId: any;
    isPersonLoggedIn = false;

    milkPouredList = [];
    dayWiseMilkCowBuffPoured = [];

    lineBuffeloValue = [];
    lineCowValue = [];
    lineMonthValue = [];
    lineMonthValue_new = [];

    stackedLineChart = {
        cowMilkPouredMorning: [],
        buffMilkPouredMorning: [],
        cowMilkPouredEvening: [],
        buffMilkPouredEvening: [],
        date: [],
    };

    totalMilkPouredList = [];
    daywiseTotalMilkPoured = {
        value: [],
        date: [],
    };

    milkFATSNF = {
        apiData: [],
        SNF: [],
        FAT: [],
        date: [],
    };

    milkNonPourer = {
        apiData: [],
        nonMilkPourersList: [],
        date: [],
    };
    topTenSocietiesList = [];
    topFiveMembersList = [];
    leastFiveMembersList = [];
    leastTenSocietiesList = [];

    routeWiseMilkCollection = {
        routesList: [],
        date: [],
        renderGraph: false,
    };

    @ViewChild('chart') chart: ChartComponent;
    public stbchartOptions: Partial<StbChartOptions>;
    public sdOptions: Partial<SemiDounutOptions>;
    public dashedLineChartOptions: Partial<DashedLineChartOptions>;
    public dashedLineDayWiseChartOptions: Partial<DashedLineChartOptions>;
    public dashedLineSNFFATChartOptions: Partial<DashedLineChartOptions>;
    public dashedLineRouteWiseMilkPourChartOptions: Partial<DashedLineChartOptions>;
    public dashedLineNonMilkPourerChartOptions: Partial<DashedLineChartOptions>;

    constructor(
        private spinner: NgxSpinnerService,
        private toast: ToasterService,
        private utils: UtilsService,
        private logger: LoggerService,
        private dashboardAPI: DashboardService,
        private session: SessionService
    ) { }

    ngOnInit(): void {
        // this.loadDayWiseMilkPouredBreakUp(this.districtId);
        // this.loadWeekWiseMilkPouredLitres(this.districtId);
        // this.loadDayWiseTotalMilkPoured(this.districtId);
        // this.loadDayWiseFatSNF(this.districtId);
        // this.loadTopTenSocietiesList(this.districtId);
        // this.loadtopFiveMembersList(this.districtId);
    }

    ngOnChanges(): void {
        debugger;
        if (this.session.accessToken && this.session.desigId) {
            this.isPersonLoggedIn = true;
        }
        this.loadDayWiseMilkPouredBreakUp(this.districtId);
        this.loadWeekWiseMilkPouredLitres(this.districtId);
        this.loadDayWiseTotalMilkPoured(this.districtId);
        this.loadDayWiseFatSNF(this.districtId);
        this.loadTopTenSocietiesList(this.districtId);
        this.loadtopFiveMembersList(this.districtId);
        this.loadmentorWiseMilkCollectionData(this.districtId);
        this.loadNonMilkPourerData(this.districtId);
        debugger;
        this.loadLeastTenSocietiesList(this.districtId);
        this.loadleastFiveMembersList(this.districtId);
    }

    // async loadLeastTenSocietiesList(districtId): Promise<void> {
    //     try {
    //         this.leastTenSocietiesList = [];
    //         const req = {
    //             type: "1",
    //             districtId: districtId,
    //         };
    //         this.spinner.show();
    //         const res = await this.dashboardAPI.milkpouredSocietiesMembersList(req);
    //         if (res.success) {
    //             if (
    //                 res.result !== undefined &&
    //                 res.result !== null &&
    //                 res.result !== ''
    //             ) {
    //                 this.leastTenSocietiesList = res.result;
    //             }

    //             this.spinner.hide();
    //         } else {
    //             this.spinner.hide();
    //             // this.toast.info(res.message);
    //         }
    //     } catch (error) {
    //         this.spinner.hide();
    //         this.utils.catchResponse(error);
    //     }
    // }

    // New Controller and Proc RBK_REPORTS_DASHBOARD Passing Date
    async loadLeastTenSocietiesList(districtId): Promise<void> {
        try {
            this.leastTenSocietiesList = [];
            const req = {
                type: "4",
                districtId: districtId,
                FromDate: this.Selected_Date
            };
            this.spinner.show();
            const res = await this.dashboardAPI.LestGridsListGet(req);
            if (res.success) {
                if (
                    res.result !== undefined &&
                    res.result !== null &&
                    res.result !== ''
                ) {
                    this.leastTenSocietiesList = res.result;
                }

                this.spinner.hide();
            } else {
                this.spinner.hide();
                // this.toast.info(res.message);
            }
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }




    // async loadleastFiveMembersList(districtId): Promise<void> {
    //     try {
    //         this.leastFiveMembersList = [];
    //         const req = {
    //             type: "2",
    //             districtId: districtId,
    //         };
    //         this.spinner.show();
    //         const res = await this.dashboardAPI.milkpouredSocietiesMembersList(req);
    //         if (res.success) {
    //             if (
    //                 res.result !== undefined &&
    //                 res.result !== null &&
    //                 res.result !== ''
    //             ) {
    //                 this.leastFiveMembersList = res.result;
    //             }

    //             this.spinner.hide();
    //         } else {
    //             this.spinner.hide();
    //             // this.toast.info(res.message);
    //         }
    //     } catch (error) {
    //         this.spinner.hide();
    //         this.utils.catchResponse(error);
    //     }
    // }

    // New Controller and Proc RBK_REPORTS_DASHBOARD Passing Date
    async loadleastFiveMembersList(districtId): Promise<void> {
        try {
            this.leastFiveMembersList = [];
            const req = {
                type: "6",
                districtId: districtId,
                FromDate: this.Selected_Date
            };
            this.spinner.show();
            const res = await this.dashboardAPI.LestGridsListGet(req);
            if (res.success) {
                if (
                    res.result !== undefined &&
                    res.result !== null &&
                    res.result !== ''
                ) {
                    this.leastFiveMembersList = res.result;
                }

                this.spinner.hide();
            } else {
                this.spinner.hide();
                // this.toast.info(res.message);
            }
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }

    async loadDayWiseMilkPouredBreakUp(districtId): Promise<void> {
        try {
            this.dayWiseMilkCowBuffPoured = [];
            this.stackedLineChart = {
                cowMilkPouredMorning: [],
                buffMilkPouredMorning: [],
                cowMilkPouredEvening: [],
                buffMilkPouredEvening: [],
                date: [],
            };
            const req = {
                districtId: districtId,
            };
            this.spinner.show();
            const res = await this.dashboardAPI.dayWiseMilkPouredBreakUp(req);
            if (res.success) {
                if (
                    res.result !== undefined &&
                    res.result !== null &&
                    res.result !== ''
                ) {
                    this.dayWiseMilkCowBuffPoured = res.result;
                    //console.log(this.dayWiseMilkCowBuffPoured);
                }
                debugger;
                // tslint:disable-next-line: prefer-for-of
                for (var i = 0; i < this.dayWiseMilkCowBuffPoured.length; i++) {
                    this.stackedLineChart.buffMilkPouredMorning.push(
                        // tslint:disable-next-line: radix
                        parseInt(this.dayWiseMilkCowBuffPoured[i].TOTAL_BUFFALO_MILK_LTR_M)
                    );
                    this.stackedLineChart.cowMilkPouredMorning.push(
                        // tslint:disable-next-line: radix
                        parseInt(this.dayWiseMilkCowBuffPoured[i].TOTAL_COW_MILK_LTR_M)
                    );
                    this.stackedLineChart.buffMilkPouredEvening.push(
                        // tslint:disable-next-line: radix
                        parseInt(this.dayWiseMilkCowBuffPoured[i].TOTAL_BUFFALO_MILK_LTR_E)
                    );
                    this.stackedLineChart.cowMilkPouredEvening.push(
                        // tslint:disable-next-line: radix
                        parseInt(this.dayWiseMilkCowBuffPoured[i].TOTAL_COW_MILK_LTR_E)
                    );
                    this.stackedLineChart.date.push(
                        this.dayWiseMilkCowBuffPoured[i].TRANSACTION_DATE
                    );
                }
                this.stackedBarChartRender();
                this.spinner.hide();
            } else {
                this.spinner.hide();
                // this.toast.info(res.message);
            }
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }

    async loadWeekWiseMilkPouredLitres(districtId): Promise<void> {
        try {
            this.milkPouredList = [];
            this.lineBuffeloValue = [];
            this.lineCowValue = [];
            this.lineMonthValue = [];
            this.lineMonthValue_new = [];
            const req = {
                districtId: districtId,
            };
            this.spinner.show();
            const res = await this.dashboardAPI.weekWiseMilkPouredLitres(req);
            if (res.success) {
                if (
                    res.result !== undefined &&
                    res.result !== null &&
                    res.result !== ''
                ) {
                    this.milkPouredList = res.result;
                }

                // tslint:disable-next-line: prefer-for-of
                for (var i = 0; i < this.milkPouredList.length; i++) {


                    this.lineBuffeloValue.push(
                        // tslint:disable-next-line: radix
                        parseInt(this.milkPouredList[i].TOTAL_BUFFALO_MILK_LTR)
                    );
                    this.lineCowValue.push(
                        // tslint:disable-next-line: radix
                        parseInt(this.milkPouredList[i].TOTAL_COW_MILK_LTR)
                    );

                    this.lineMonthValue_new.push(this.milkPouredList[i].MILK_MONTH);
                }
                this.lineBuffeloValue.push(parseInt(this.milkPouredList[this.milkPouredList.length - 1].TOTAL_BUFFALO_MILK_LTR));
                this.lineCowValue.push(parseInt(this.milkPouredList[this.milkPouredList.length - 1].TOTAL_COW_MILK_LTR));
                this.lineMonthValue_new.push(this.milkPouredList[this.milkPouredList.length - 1].MILK_MONTH);
                //this.lineMonthValue.push( this.lineMonthValue_new);  

                this.lineChartRender_new();
                this.spinner.hide();
            } else {
                this.spinner.hide();
                // this.toast.info(res.message);
            }
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }

    async loadDayWiseTotalMilkPoured(districtId): Promise<void> {
        try {
            this.totalMilkPouredList = [];
            this.daywiseTotalMilkPoured = {
                value: [],
                date: [],
            };
            const req = {
                districtId: districtId,
            };
            this.spinner.show(); debugger;
            const res = await this.dashboardAPI.dayWiseTotalMilkPoured(req);
            if (res.success) {
                if (
                    res.result !== undefined &&
                    res.result !== null &&
                    res.result !== ''
                ) {
                    this.totalMilkPouredList = res.result;
                }

                // tslint:disable-next-line: prefer-for-of
                for (var i = 0; i < this.totalMilkPouredList.length; i++) {
                    this.daywiseTotalMilkPoured.value.push(
                        // tslint:disable-next-line: radix
                        parseInt(this.totalMilkPouredList[i].TOTAL_MILK_LTR)
                    );
                    this.daywiseTotalMilkPoured.date.push(
                        this.totalMilkPouredList[i].TRANSACTION_DATE
                    );
                }

                this.lineChartDayWiseRender();
                this.spinner.hide();
            } else {
                this.spinner.hide();
                // this.toast.info(res.message);
            }
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }

    async loadDayWiseFatSNF(districtId): Promise<void> {
        try {
            this.milkFATSNF = {
                apiData: [],
                SNF: [],
                FAT: [],
                date: [],
            };
            const req = {
                districtId: districtId,
            };
            this.spinner.show();
            const res = await this.dashboardAPI.dayWiseSNFFatList(req);
            if (res.success) {
                if (
                    res.result !== undefined &&
                    res.result !== null &&
                    res.result !== ''
                ) {
                    this.milkFATSNF.apiData = res.result;
                }

                // tslint:disable-next-line: prefer-for-of
                for (var i = 0; i < this.milkFATSNF.apiData.length; i++) {
                    this.milkFATSNF.FAT.push(
                        parseFloat(this.milkFATSNF.apiData[i].AVG_FAT_IN_MILK)
                    );
                    this.milkFATSNF.SNF.push(
                        parseFloat(this.milkFATSNF.apiData[i].AVG_SNF_IN_MILK)
                    );
                    this.milkFATSNF.date.push(
                        this.milkFATSNF.apiData[i].TRANSACTION_DATE
                    );
                }

                this.lineChartSNFFATRender();
                this.spinner.hide();
            } else {
                this.spinner.hide();
                // this.toast.info(res.message);
            }
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }

    // New Controller and Proc RBK_REPORTS_DASHBOARD Passing Date

    async loadTopTenSocietiesList(districtId): Promise<void> {
        try {
            debugger;
            this.topTenSocietiesList = [];
            const req = {
                type: "3",
                districtId: districtId,
                FromDate: this.Selected_Date
            };

            this.spinner.show();
            const res = await this.dashboardAPI.TopGridsListGet(req);
            if (res.success) {
                if (
                    res.result !== undefined &&
                    res.result !== null &&
                    res.result !== ''
                ) {
                    debugger;
                    this.topTenSocietiesList = res.result;
                    console.log(this.topTenSocietiesList);
                }
                this.spinner.hide();
            } else {
                this.spinner.hide();
                this.toast.info(res.message);
            }
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }
    // async loadTopTenSocietiesList(districtId): Promise<void> {
    //     try {
    //         this.topTenSocietiesList = [];
    //         const req = {
    //             districtId: districtId,
    //         };
    //         this.spinner.show();
    //         const res = await this.dashboardAPI.topTenSocietiesList(req);
    //         if (res.success) {
    //             if (
    //                 res.result !== undefined &&
    //                 res.result !== null &&
    //                 res.result !== ''
    //             ) {
    //                 this.topTenSocietiesList = res.result;
    //             }

    //             this.spinner.hide();
    //         } else {
    //             this.spinner.hide();
    //             // this.toast.info(res.message);
    //         }
    //     } catch (error) {
    //         this.spinner.hide();
    //         this.utils.catchResponse(error);
    //     }
    // }

    // async loadtopFiveMembersList(districtId): Promise<void> {
    //     try {
    //         this.topFiveMembersList = [];
    //         const req = {
    //             districtId: districtId,
    //         };
    //         this.spinner.show();
    //         const res = await this.dashboardAPI.topFiveMembersList(req);
    //         if (res.success) {
    //             if (
    //                 res.result !== undefined &&
    //                 res.result !== null &&
    //                 res.result !== ''
    //             ) {
    //                 this.topFiveMembersList = res.result;
    //             }

    //             this.spinner.hide();
    //         } else {
    //             this.spinner.hide();
    //             // this.toast.info(res.message);
    //         }
    //     } catch (error) {
    //         this.spinner.hide();
    //         this.utils.catchResponse(error);
    //     }
    // }

    // New Controller and Proc RBK_REPORTS_DASHBOARD Passing Date

    async loadtopFiveMembersList(districtId): Promise<void> {
        try {
            this.topFiveMembersList = [];
            const req = {
                type: "5",
                districtId: districtId,
                FromDate: this.Selected_Date
            };
            this.spinner.show();
            const res = await this.dashboardAPI.TopGridsListGet(req);
            if (res.success) {
                if (
                    res.result !== undefined &&
                    res.result !== null &&
                    res.result !== ''
                ) {
                    this.topFiveMembersList = res.result;
                }

                this.spinner.hide();
            } else {
                this.spinner.hide();
                // this.toast.info(res.message);
            }
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }

    async loadmentorWiseMilkCollectionData(districtId): Promise<void> {
        try {
            this.routeWiseMilkCollection = {
                routesList: [],
                date: [],
                renderGraph: false,
            };

            const req = {
                districtId: districtId,
            };
            this.spinner.show();
            const res = await this.dashboardAPI.mentorWiseMilkCollectionData(req);
            if (res.success) {
                this.routeWiseMilkCollection = {
                    routesList: [],
                    date: [],
                    renderGraph: false,
                };

                const milkData = res.result;
                // tslint:disable-next-line: prefer-for-of
                for (let i = 0; i < milkData.length; i++) {
                    if (this.checkRecordInRouteList(milkData[i].ROUTE_NAME)) {
                        this.routeWiseMilkCollection.routesList.push({
                            name: milkData[i].ROUTE_NAME,
                            data: [],
                        });
                    }
                    if (this.checkDateInRouteList(milkData[i].TXN_DATE)) {
                        this.routeWiseMilkCollection.date.push(milkData[i].TXN_DATE);
                    }
                }

                // tslint:disable-next-line: prefer-for-of
                for (let i = 0; i < this.routeWiseMilkCollection.date.length; i++) {
                    // tslint:disable-next-line: prefer-for-of
                    for (
                        let j = 0;
                        j < this.routeWiseMilkCollection.routesList.length;
                        j++
                    ) {
                        // tslint:disable-next-line: prefer-for-of
                        for (let k = 0; k < milkData.length; k++) {
                            if (
                                this.routeWiseMilkCollection.date[i] === milkData[k].TXN_DATE &&
                                this.routeWiseMilkCollection.routesList[j].name ===
                                milkData[k].ROUTE_NAME
                            ) {
                                this.routeWiseMilkCollection.routesList[j].data.push(
                                    // tslint:disable-next-line: radix
                                    parseInt(milkData[k].TOTAL_MILK_LTR)
                                );
                            }
                        }
                    }
                }
                // debugger;

                // this.routeWiseMilkCollection.routesList.push({ name: milkData[milkData.length-1].ROUTE_NAME, data: [], });
                //         this.routeWiseMilkCollection.routesList[this.routeWiseMilkCollection.routesList.length-1].data.push( parseInt(milkData[milkData.length-1].TOTAL_MILK_LTR)  );
                //        // this.routeWiseMilkCollection.date.push(this.routeWiseMilkCollection.date[this.routeWiseMilkCollection.date.length-1]);
                //         this.routeWiseMilkCollection.date.push(milkData[milkData.length-1].TXN_DATE)

                this.lineChartRouteWiseMilkPouringRender();
                this.routeWiseMilkCollection.renderGraph = true;
                this.spinner.hide();
            } else {
                this.spinner.hide();
                // this.toast.info(res.message);
            }
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }

    async loadNonMilkPourerData(districtId): Promise<void> {
        try {
            this.milkNonPourer = {
                apiData: [],
                nonMilkPourersList: [],
                date: [],
            };
            const req = {
                districtId: districtId,
            };
            this.spinner.show();
            const res = await this.dashboardAPI.milkNonPourerLineChart(req);
            this.spinner.hide();
            if (res.success) {
                if (
                    res.result !== undefined &&
                    res.result !== null &&
                    res.result !== ''
                ) {
                    this.milkNonPourer.apiData = res.result;
                }

                // tslint:disable-next-line: prefer-for-of
                for (var i = 0; i < this.milkNonPourer.apiData.length; i++) {
                    const nonPourers = parseFloat(
                        this.milkNonPourer.apiData[i].TOTAL_NON_POURERS
                    );
                    const totalFarmers = parseFloat(
                        this.milkNonPourer.apiData[i].TOTAL_FARMERS
                    );
                    const nonMilkPoruersPercentage = (nonPourers / totalFarmers) * 100;

                    this.milkNonPourer.nonMilkPourersList.push(
                        nonMilkPoruersPercentage.toFixed(2)
                    );
                    this.milkNonPourer.date.push(this.milkNonPourer.apiData[i].LAST_THRITY_DATES);
                }
                this.lineChartNonMilkPourerRender();
            } else {
                this.spinner.hide();
                // this.toast.info(res.message);
            }
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }

    btnReportClick(reportId): void {
        if (this.isPersonLoggedIn) {
            const req = {
                reportId: reportId,
                districtId: this.districtId,
            };
            this.onReportsClickChange.emit(req);
        }
    }

    checkRecordInRouteList(routeName): boolean {
        // tslint:disable-next-line: prefer-for-of
        for (let j = 0; j < this.routeWiseMilkCollection.routesList.length; j++) {
            if (this.routeWiseMilkCollection.routesList[j].name === routeName) {
                return false;
            }
        }
        return true;
    }

    checkDateInRouteList(date): boolean {
        // tslint:disable-next-line: prefer-for-of
        for (let j = 0; j < this.routeWiseMilkCollection.date.length; j++) {
            if (this.routeWiseMilkCollection.date[j] === date) {
                return false;
            }
        }
        return true;
    }

    stackedBarChartRender(): void {
        this.stbchartOptions = {
            series: [
                {
                    name: 'Buffalo Milk Poured Morning',
                    data: this.stackedLineChart.buffMilkPouredMorning,
                },
                {
                    name: 'Cow Milk Poured Morning',
                    data: this.stackedLineChart.cowMilkPouredMorning,
                },
                {
                    name: 'Buffalo Milk Poured Evening',
                    data: this.stackedLineChart.buffMilkPouredEvening,
                },
                {
                    name: 'Cow Milk Poured Evening',
                    data: this.stackedLineChart.cowMilkPouredEvening,
                },
            ],
            chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                zoom: {
                    enabled: true,
                },
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                },
            },
            stroke: {
                width: 1,
                colors: ['#fff'],
            },
            title: {
                text: '',
            },

            xaxis: {
                categories: this.stackedLineChart.date,
                tickPlacement: 'on',
                offsetY: 60,
                labels: {
                    rotate: 90,

                },

            },
            yaxis:
            {

                title: {
                    text: undefined,

                },
            },
            tooltip: {
                y: {
                    formatter: function (val: any) {
                        val = val.toString();
                        let lastThree = val.substring(val.length - 3);
                        let otherNumbers = val.substring(0, val.length - 3);
                        if (otherNumbers != '') {
                            lastThree = ',' + lastThree;
                        }
                        const result =
                            otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
                        return result + ' Litres';
                    },
                },
                followCursor: true,
            },
            fill: {
                opacity: 1,
                colors: this.chartColors,
            },
            legend: {
                position: 'bottom',
                horizontalAlign: 'right',
                offsetX: 0,
                markers: {
                    fillColors: this.chartColors,
                },
            },
        };
    }

    semiDonutChartRender(): void {
        this.sdOptions = {
            series: [44, 55, 41, 17, 15],
            chart: {
                width: 350,
                type: 'donut',
            },

            plotOptions: {
                pie: {
                    startAngle: -90,
                    endAngle: 90,
                    offsetY: 0,
                    offsetX: 0,
                },
            },
            grid: {
                padding: {
                    bottom: -80,
                },
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                        legend: {
                            position: 'bottom',
                        },
                    },
                },
                {
                    breakpoint: 1920,
                    options: {
                        legend: {
                            position: 'bottom',
                        },
                    },
                },
            ],
        };
    }

    lineChartRender(): void {
        debugger;
        this.dashedLineChartOptions = {
            series: [
                {
                    name: 'Buffalo Milk',
                    data: this.lineBuffeloValue,
                },
                {
                    name: 'Cow Milk',
                    data: this.lineCowValue,
                },
            ],
            chart: {
                height: 350,
                type: 'line',
            },
            fill: {
                colors: this.chartColors,
            },
            colors: this.chartColors,
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: 5,
                curve: 'smooth',
            },
            legend: {
                tooltipHoverFormatter: function (val, opts) {
                    return (
                        val +
                        ' - <strong>' +
                        opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
                        '</strong>'
                    );
                },
                markers: {
                    fillColors: this.chartColors,
                },
            },
            markers: {
                size: 0,
                hover: {
                    sizeOffset: 6,
                },
            },
            xaxis: {
                labels: {
                    trim: false,
                },
                categories: this.lineMonthValue,
                tickPlacement: 'on',
            },
            tooltip: {
                y: {
                    formatter: function (val: any) {
                        if (val === '' || val === undefined || val === null) {
                            val = '0';
                        }
                        val = val.toString();
                        let lastThree = val.substring(val.length - 3);
                        let otherNumbers = val.substring(0, val.length - 3);
                        if (otherNumbers != '') {
                            lastThree = ',' + lastThree;
                        }
                        const result =
                            otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
                        return result + ' Litres';
                    },
                },
            },
            grid: {
                borderColor: '#f1f1f1',
            },
        };
    }

    lineChartRender_new(): void {
        debugger;
        this.dashedLineChartOptions = {
            series: [
                {
                    name: 'Buffalo Milk',
                    data: this.lineBuffeloValue,
                },
                {
                    name: 'Cow Milk',
                    data: this.lineCowValue,
                },
            ],
            chart: {
                height: 350,
                type: 'line',
            },
            fill: {
                colors: this.chartColors,
            },
            colors: this.chartColors,
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: 5,
                curve: 'smooth',
            },
            legend: {
                tooltipHoverFormatter: function (val, opts) {
                    return (
                        val +
                        ' - <strong>' +
                        opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
                        '</strong>'
                    );
                },
                markers: {
                    fillColors: this.chartColors,
                },
            },
            markers: {
                size: 0,
                hover: {
                    sizeOffset: 6,
                },
            },
            xaxis: {
                labels: {
                    trim: false,
                },
                categories: this.lineMonthValue_new,
                tickPlacement: 'on',
            },
            tooltip: {
                y: {
                    formatter: function (val: any) {
                        if (val === '' || val === undefined || val === null) {
                            val = '0';
                        }
                        val = val.toString();
                        let lastThree = val.substring(val.length - 3);
                        let otherNumbers = val.substring(0, val.length - 3);
                        if (otherNumbers != '') {
                            lastThree = ',' + lastThree;
                        }
                        const result =
                            otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
                        return result + ' Litres';
                    },
                },
            },
            grid: {
                borderColor: '#f1f1f1',
            },
        };
    }


    lineChartDayWiseRender(): void {
        this.dashedLineDayWiseChartOptions = {
            series: [
                {
                    name: 'Milk Poured ',
                    data: this.daywiseTotalMilkPoured.value,
                },
            ],
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: true,
                },
            },
            fill: {
                colors: this.chartColors,
            },
            colors: this.chartColors,
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: 5,
                curve: 'smooth',
            },
            legend: {
                tooltipHoverFormatter: function (val, opts) {
                    return (
                        val +
                        ' - <strong>' +
                        opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
                        '</strong>'
                    );
                },
                markers: {
                    fillColors: this.chartColors,
                },
            },
            markers: {
                size: 0,
                hover: {
                    sizeOffset: 6,
                },
            },
            xaxis: {
                labels: {
                    trim: false,
                },
                categories: this.daywiseTotalMilkPoured.date,
                tickPlacement: 'on',
            },

            // yaxis: {
            //  min: 30000,
            //  max: 100,
            // labels: {
            //   formatter: function (val) {
            //   //  var  val1 = val.toString();

            //   //   if(val1.length.toString() ==='5')  {let lastThree = val1.substring(val1.length - 3); val1=lastThree+'000'; }
            //   //  else if(val1.length.toString() ==='6') {let lastfour = val1.substring(val1.length - 4); val1=lastfour+'0000' ;}
            //   //  else if(val1.length.toString() ==='7') {let lastfive = val1.substring(val1.length - 5); val1=lastfive+'00000' ;}
            //   //    alert(val1.toString());

            //       let lastThree = val.toString().substring(0,val.toString().length - 3);
            //     // let otherNumbers = val.substring(0, val.length - 3);
            //     val=parseInt(lastThree+'000');
            //     return val.toFixed(0);
            //   },
            // },
            // },
            tooltip: {
                y: {
                    formatter: function (val: any) {
                        val = val.toString();
                        let lastThree = val.substring(val.length - 3);
                        let otherNumbers = val.substring(0, val.length - 3);
                        if (otherNumbers != '') {
                            lastThree = ',' + lastThree;
                        }
                        const result =
                            otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
                        return result + ' Litres';
                    },
                },
            },
            grid: {
                borderColor: '#f1f1f1',
            },
        };
    }

    lineChartSNFFATRender(): void {
        this.dashedLineSNFFATChartOptions = {
            series: [
                {
                    name: 'FAT IN MILK',
                    data: this.milkFATSNF.FAT,
                },
                {
                    name: 'SNF IN MILK',
                    data: this.milkFATSNF.SNF,
                },
            ],
            chart: {
                height: 350,
                type: 'line',
            },
            fill: {
                colors: this.chartColors,
            },
            colors: this.chartColors,
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: 5,
                curve: 'smooth',
            },
            legend: {
                tooltipHoverFormatter: function (val, opts) {
                    return (
                        val +
                        ' - <strong>' +
                        opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
                        '</strong>'
                    );
                },
                markers: {
                    fillColors: this.chartColors,
                },
            },
            markers: {
                size: 0,
                hover: {
                    sizeOffset: 6,
                },
            },
            xaxis: {
                labels: {
                    trim: false,
                },
                categories: this.milkFATSNF.date,
            },
            yaxis: {
                min: 0,
                max: 10,
                labels: {
                    formatter: function (val) {
                        return val.toFixed(2);
                    },
                },
            },
            tooltip: {
                y: {
                    formatter: function (val: any) {
                        val = val.toString();
                        return val + ' %';
                    },
                },
            },
            grid: {
                borderColor: '#f1f1f1',
            },
        };
    }

    lineChartRouteWiseMilkPouringRender(): void {
        this.dashedLineRouteWiseMilkPourChartOptions = {
            series: this.routeWiseMilkCollection.routesList,
            chart: {
                height: 'auto',
                type: 'line',
            },
            fill: {
                colors: this.chartColors,
            },
            colors: this.chartColors,
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: 2,
                curve: 'smooth',
            },
            legend: {
                tooltipHoverFormatter: function (val, opts) {
                    return (
                        val +
                        ' - <strong>' +
                        opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
                        '</strong>'
                    );
                },
                markers: {
                    fillColors: this.chartColors,
                },
            },
            markers: {
                size: 0,
                hover: {
                    sizeOffset: 6,
                },
            },
            xaxis: {
                labels: {
                    trim: false,
                },
                categories: this.routeWiseMilkCollection.date,
            },
            yaxis: {
                labels: {
                    formatter: function (val) {
                        return val.toString();
                    },
                },
            },
            tooltip: {
                y: {
                    formatter: function (val: any) {
                        if (val === undefined || val === null || val === '') {
                            val = '0';
                        }
                        val = val.toString();
                        let lastThree = val.substring(val.length - 3);
                        const otherNumbers = val.substring(0, val.length - 3);
                        if (otherNumbers !== '') {
                            lastThree = ',' + lastThree;
                        }
                        const result =
                            otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
                        return result + ' Litres';
                    },
                },
            },
            grid: {
                borderColor: '#f1f1f1',
            },
        };
    }

    lineChartNonMilkPourerRender(): void {
        this.dashedLineNonMilkPourerChartOptions = {
            series: [
                {
                    name: 'FAT IN MILK',
                    data: this.milkNonPourer.nonMilkPourersList,
                },
            ],
            chart: {
                height: 350,
                type: 'line',
            },
            fill: {
                colors: this.chartColors,
            },
            colors: this.chartColors,
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: 5,
                curve: 'smooth',
            },
            legend: {
                tooltipHoverFormatter: function (val, opts) {
                    return (
                        val +
                        ' - <strong>' +
                        opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
                        '</strong>'
                    );
                },
                markers: {
                    fillColors: this.chartColors,
                },
            },
            markers: {
                size: 0,
                hover: {
                    sizeOffset: 6,
                },
            },
            xaxis: {
                labels: {
                    trim: false,
                },
                categories: this.milkNonPourer.date,
            },
            yaxis: {
                min: 0,
                max: 100,
                labels: {
                    formatter: function (val) {
                        return val.toFixed(2);
                    },
                },
            },
            tooltip: {
                y: {
                    formatter: function (val: any) {
                        val = val.toString();
                        return val + '%';
                    },
                },
            },
            grid: {
                borderColor: '#f1f1f1',
            },
        };
    }
}
