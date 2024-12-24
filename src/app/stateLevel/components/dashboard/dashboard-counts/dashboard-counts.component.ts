import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';

// export type ChartOptions = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   dataLabels: ApexDataLabels;
//   plotOptions: ApexPlotOptions;
//   stroke: ApexStroke;
//   xaxis: ApexXAxis;
//   yaxis: ApexYAxis;
//   colors: string[];
//   fill: ApexFill;
//   legend: ApexLegend;
// };

import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { DashboardService } from 'src/app/stateLevel/services/dashboard.service';
import {
    BarChartOptions,
    BarChartOptions2,
    //ChartOptions,
    ChartOptions1,
    PieChartOptions,
    StbChartOptions,
} from './../../../models/apex-charts';
import { ChartComponent } from 'ng-apexcharts';
import { isNull } from '@angular/compiler/src/output/output_ast';





// import {
//   ChartComponent,
//   ApexAxisChartSeries,
//   ApexChart,
//   ApexXAxis,
//   ApexDataLabels,
//   ApexStroke,
//   ApexYAxis,
//   ApexFill,
//   ApexLegend,
//   ApexPlotOptions
// } from "ng-apexcharts";




// export type ChartOptions = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   dataLabels: ApexDataLabels;
//   plotOptions: ApexPlotOptions;
//   stroke: ApexStroke;
//   xaxis: ApexXAxis;
//   yaxis: ApexYAxis;
//   colors: string[];
//   fill: ApexFill;
//   legend: ApexLegend;
// };


@Component({
    selector: 'app-dashboard-counts',
    templateUrl: './dashboard-counts.component.html',
    styleUrls: ['./dashboard-counts.component.css'],
})
export class DashboardCountsComponent implements OnInit, OnChanges {


    @ViewChild('chart') chart: ChartComponent;
    public stbchartOptions: Partial<StbChartOptions>;
    // tslint:disable-next-line: no-output-on-prefix
    @Output() onCountsClickChange = new EventEmitter<string>();
    tooltip1: any;
    chartColors = [
        '#008FFB',
        '#00E396',
        '#FF4560',
        '#775DD0',
        '#03A9F4',
        '#449DD1',
        '#D7263D',
        '#662E9B',
        '#5C4742',
        '#A300D6',
    ];

    barColors = [

        '#556B2F',
        '#008B8B',
        '#DAA520',
        '#66CDAA',




        '#008FFB',
        '#00E396',
        '#FF4560',
        '#775DD0',
        '#03A9F4',
        '#449DD1'
        // '#D7263D',
        //'#662E9B',
        // '#5C4742',
        // '#A300D6',
    ];


    @Input() districtId: any;
    @Input() Selected_Date: any
    isPersonLoggedIn = false;
    statuscode: any;
    scode: any;
    dailycounts: any;
    Cumulativecounts: any;
    cummulativeCounts: any;
    todayCounts: any;
    cmucounts: any;
    stateMilkProd = [];
    pieChartTitle = [];
    pieChartValue = [];

    dayWiseMilkPoured = [];
    barChartValue = [];
    barChartTitle = [];

    pendingvillageList = [];
    pendingsocietyList = [];

    barChartSocietiesValue = [];
    // BarChartOptions2

    //StbChartOptions    BarChartOptions
    // public bOptions: Partial<StbChartOptions>;
    public pieChartOptions: Partial<PieChartOptions>;
    //public chartOptions: Partial<ChartOptions1>;

    // @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions1>;

    constructor(
        private spinner: NgxSpinnerService,
        private toast: ToasterService,
        private utils: UtilsService,
        private logger: LoggerService,
        private dashboardAPI: DashboardService,
        private session: SessionService,
        private router: Router
    ) { }

    ngOnInit(): void {

        // if(this.session.dashboarddistrictid===''){ this.districtId='';
        //     this.loadReportsALL();
        //     this.loadTodayCountsALL();
        //     this.loadDistrictWiseMilkPouredLitresALL();
        //    }
        //    else{  this.districtId=this.session.dashboarddistrictid;
        //  this.loadReports(this.districtId);
        //   this.loadTodayCounts(this.districtId);
        //   this.loadDistrictWiseMilkPouredLitres(this.districtId);
        //     }

    }

    ngOnChanges(): void {
        sessionStorage.setItem('Selected_Date', this.Selected_Date);
        if (this.session.accessToken && this.session.desigId) {
            this.isPersonLoggedIn = true;
        } debugger;
        if (this.districtId === '') {
            this.loadReportsALL();
            // this.loadTodayCountsALL();
            this.loadTodayCounts(this.districtId);
            this.loadDistrictWiseMilkPouredLitresALL();
            //  this.loadDistrictWiseMilkPouredLitres(this.districtId);
            this.loadDayWiseMilkPouredVillages(this.districtId);
        }
        else {
            this.loadReports(this.districtId);
            this.loadTodayCounts(this.districtId);
            this.loadDistrictWiseMilkPouredLitres(this.districtId);
            this.loadDayWiseMilkPouredVillages(this.districtId);
        }
        this.session.Date = sessionStorage.getItem('Selected_Date');

    }
    //   if (this.session.accessToken && this.session.desigId) {
    //     this.isPersonLoggedIn = true;
    //   }
    //   this.loadReports();
    //   this.loadTodayCounts();
    //   this.loadDistrictWiseMilkPouredLitres();
    //   this.loadDayWiseMilkPouredVillages(this.districtId);
    // }

    btnFutureDateReport(): void {
        this.router.navigate(['/state/FutureDatesMilkPouringReport']);
    }
    async loadReportsALL(): Promise<void> {
        try {
            this.cummulativeCounts = [];
            this.spinner.show(); debugger;
            const res = await this.dashboardAPI.stateCumulativeCounts();
            if (res.success) {
                if (
                    res.cummulativeCount[0] !== undefined &&
                    res.cummulativeCount[0] !== null &&
                    res.cummulativeCount[0] !== ''
                ) {
                    this.cummulativeCounts = res.cummulativeCount[0];
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
    async loadReports(districtId): Promise<void> {
        try {
            this.cummulativeCounts = [];
            const req = {
                type: "3",
                districtId: districtId,
            };
            this.spinner.show();
            const res = await this.dashboardAPI.milkpouredSocietiesMembersList(req);
            if (res.success) {

                // if (
                //   res.cummulativeCount[0] !== undefined &&
                //   res.cummulativeCount[0] !== null &&
                //   res.cummulativeCount[0] !== ''
                // ) 


                if (
                    res.result[0] !== undefined &&
                    res.result[0] !== null &&
                    res.result[0] !== ''
                ) {
                    this.cummulativeCounts = res.result[0];//res.cummulativeCount[0];

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

    // async loadTodayCountsALL(): Promise<void> {
    //     try {
    //         this.todayCounts = [];
    //         this.spinner.show(); debugger;
    //         const res = await this.dashboardAPI.todayCounts();
    //         if (res.success) {
    //             if (
    //                 res.result[0] !== undefined &&
    //                 res.result[0] !== null &&
    //                 res.result[0] !== ''
    //             ) {
    //                 this.todayCounts = res.result[0];
    //             }
    //             this.spinner.hide();
    //         } else {
    //             this.spinner.hide();
    //             this.toast.info(res.message);
    //         }
    //     } catch (error) {
    //         this.spinner.hide();
    //         this.utils.catchResponse(error);
    //     }
    // }

    // async loadTodayCounts(districtId): Promise<void> {
    //     try {
    //         this.todayCounts = [];
    //         const req = {
    //             type: "4",
    //             districtId: districtId,
    //         };

    //         this.spinner.show(); debugger;
    //         const res = await this.dashboardAPI.milkpouredSocietiesMembersList(req);
    //         if (res.success) {
    //             if (
    //                 res.result[0] !== undefined &&
    //                 res.result[0] !== null &&
    //                 res.result[0] !== ''
    //             ) {
    //                 this.todayCounts = res.result[0];
    //             }
    //             this.spinner.hide();
    //         } else {
    //             this.spinner.hide();
    //             this.toast.info(res.message);
    //         }
    //     } catch (error) {
    //         this.spinner.hide();
    //         this.utils.catchResponse(error);
    //     }
    // }
    async loadTodayCounts(districtId): Promise<void> {
        try {
            this.todayCounts = [];
            const req = {
                type: "1",
                districtId: districtId,
                FromDate: this.Selected_Date
            };

            this.spinner.show(); debugger;
            const res = await this.dashboardAPI.DailyCountsDashboards(req);
            if (res.success) {
                if (
                    res.result[0] !== undefined &&
                    res.result[0] !== null &&
                    res.result[0] !== ''
                ) {
                    this.todayCounts = res.result[0];
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

    async loadDistrictWiseMilkPouredLitresALL(): Promise<void> {
        try {
            debugger;
            this.stateMilkProd = [];
            this.pieChartTitle = [];
            this.pieChartValue = [];
            this.spinner.show();
            const res = await this.dashboardAPI.districtWiseMilkPouredLitres();
            if (res.success) {
                if (
                    res.result !== undefined &&
                    res.result !== null &&
                    res.result !== ''
                ) {
                    this.stateMilkProd = res.result;
                    console.log(this.stateMilkProd);
                }

                // tslint:disable-next-line: prefer-for-of
                for (var i = 0; i < this.stateMilkProd.length; i++) {
                    this.pieChartTitle.push(this.stateMilkProd[i].DISTRICT);
                    // tslint:disable-next-line: radix
                    this.pieChartValue.push(parseInt(this.stateMilkProd[i].TOTAL_MILK));
                }
                this.pieChartRender();
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

    async loadDistrictWiseMilkPouredLitres(districtId): Promise<void> {
        try {
            this.stateMilkProd = [];
            this.pieChartTitle = [];
            this.pieChartValue = [];

            const req = {
                type: "5",
                districtId: districtId,
            };

            this.spinner.show(); debugger;
            const res = await this.dashboardAPI.milkpouredSocietiesMembersList(req);
            if (res.success) {
                if (
                    res.result !== undefined &&
                    res.result !== null &&
                    res.result !== ''
                ) {
                    this.stateMilkProd = res.result;
                }

                // tslint:disable-next-line: prefer-for-of
                for (var i = 0; i < this.stateMilkProd.length; i++) {
                    this.pieChartTitle.push(this.stateMilkProd[i].DISTRICT);
                    // tslint:disable-next-line: radix
                    this.pieChartValue.push(parseInt(this.stateMilkProd[i].TOTAL_MILK));
                }
                this.pieChartRender();
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



    async loadDayWiseMilkPouredVillages(districtId): Promise<void> {
        debugger;
        try {
            this.barChartValue = [];
            this.barChartSocietiesValue = [];
            this.barChartTitle = [];
            this.dayWiseMilkPoured = [];
            const req = {
                districtId: districtId,
            };
            this.spinner.show(); debugger;
            const res = await this.dashboardAPI.dayWiseMilkPouredVillages(req);
            if (res.success) {
                debugger;
                this.barChartValue = [];
                this.barChartSocietiesValue = [];
                this.barChartTitle = [];
                this.dayWiseMilkPoured = [];
                this.pendingvillageList = [];
                this.pendingsocietyList = [];

                if (res.result !== undefined && res.result !== null && res.result !== '') { this.dayWiseMilkPoured = res.result; }

                // tslint:disable-next-line: prefer-for-of
                for (var i = 0; i < this.dayWiseMilkPoured.length; i++) {
                    this.barChartTitle.push(this.dayWiseMilkPoured[i].TRANSACTION_DATE.substring(0, 10));//TRANSACTION_DATE
                    // tslint:disable-next-line: radix
                    this.barChartValue.push(parseInt(this.dayWiseMilkPoured[i].VILLAGES));
                    this.barChartSocietiesValue.push(parseInt(this.dayWiseMilkPoured[i].SOCIETIES));
                    this.pendingvillageList.push(parseInt(this.dayWiseMilkPoured[i].PENDING_VILLAGES));
                    this.pendingsocietyList.push(parseInt(this.dayWiseMilkPoured[i].PENDING_SOCIETIES));


                }
                this.barChartRender();
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

    // btnCountsClick(countId): void { debugger;
    //   if (this.isPersonLoggedIn) {
    //     this.onCountsClickChange.emit(countId);

    //   }
    // }

    btnCountsClick(countId): void {
        debugger;
        if (this.dailycounts == '1' && (this.cmucounts == undefined || this.cmucounts == '')) {
            this.statuscode = this.dailycounts;
        }
        else if (this.cmucounts == '2' && (this.dailycounts == undefined || this.dailycounts == '')) {
            this.statuscode = this.cmucounts;
        }
        // else(this.dailycounts== undefined && this.cmucounts==undefined)
        // {
        //   this.statuscode = '1';
        // } 

        if (this.cmucounts != '2') {
            this.scode = countId + "^" + "1";
        }
        else {
            this.scode = countId + "^" + this.statuscode;
        }

        if (this.isPersonLoggedIn) {
            this.onCountsClickChange.emit(this.scode);
        }

    }
    btnSocietyAbstractReport(id) {
        try {
            debugger;
            //this.toast.info(id);
            this.session.dashboarddistrictid = this.districtId;
            if (id === "0" || id === "1") {
                this.router.navigate(['/state/MilkpouredandpendingSocietiesReport']);    // DailyBargraphSocietyAbstractReport  SocietyAbstractReport 
            }
            else if (id === "2") { this.router.navigate(['/state/PendingVillageDetails']); }
            else if (id === "3") { this.router.navigate(['/state/PendingSocietiesDetails']); }
            // else {this.toast.info(id);}

        } catch (error) {
        }
    }


    barChartRender(): void {


        this.stbchartOptions = {

            series: [
                {
                    name: 'Received Villages ',
                    //  group:'a',      
                    data: this.barChartValue,


                },
                {
                    name: 'Received Societies ',
                    //  group:'b',
                    data: this.barChartSocietiesValue,
                },
                {
                    name: 'Pending Villages ', // group:'a',
                    data: this.pendingvillageList,
                },
                {
                    name: 'Pending Societies ', //group:'b',
                    data: this.pendingsocietyList,
                },




            ],




            chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                // zoom: {
                //   enabled: true,
                // },
                toolbar: {
                    show: false,
                    tools: {
                        download: true,
                        selection: false,
                        zoom: false,
                        zoomin: false,
                        zoomout: false,
                        pan: false,
                        customIcons: [],
                    },
                },
                events: {


                    click: function (event, chartContext, config) {
                        // window.open("https://simpleisbestt.herokuapp.com/"); //window.location.assign
                        // alert(config.seriesIndex);


                        //  if(config.seriesIndex=='0'){  alert('0'); 
                        //    window.open( "/state/DailyBargraphSocietyAbstractReport");}   //MilkpouredandpendingSocietiesReport
                        //  if(config.seriesIndex=='1'){ alert('1');           
                        //  window.open("/state/DailyBargraphSocietyAbstractReport")  ;}
                        //  if(config.seriesIndex=='2'){  alert('2');
                        //  window.open("/state/PendingVillageDetails");}
                        //  if(config.seriesIndex=='3'){  alert('3');
                        //  window.open("/state/PendingSocietiesDetails");} 



                        // dataPointSelection: function(event, chartContext, config) {
                        //     // console.log(config.w.config.labels[config.dataPointIndex]);
                        //     // console.log(config.w.config.series[config.dataPointIndex]);
                        //     alert(config.seriesIndex);
                        //     if(config.seriesIndex==='0')
                        //     this.router.navigate(['/state/PendingSocietiesDetails']);
                        //     if(config.seriesIndex==='1')
                        //     this.router.navigate(['/state/DailyBargraphSocietyAbstractReport']);
                        //     if(config.seriesIndex==='2')
                        //     this.router.navigate(['/state/PendingSocietiesDetails']);

                    }
                }
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
                categories: this.barChartTitle,
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
                        return result; //+ ' Litres';
                    },
                },
                followCursor: true,
            },
            fill: {
                opacity: 1,
                colors: this.barColors,
            },
            legend: {
                position: 'bottom',
                horizontalAlign: 'right',
                offsetX: 0,
                markers: {
                    fillColors: this.barColors,
                },
            },

            // tooltip: {


            //   y: {
            //     formatter: function (val: any) {

            //       val = val.toString();
            //       let lastThree = val.substring(val.length - 3);
            //       let otherNumbers = val.substring(0, val.length - 3);
            //       if (otherNumbers != '') {
            //         lastThree = ',' + lastThree;
            //       }

            //       const result = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
            //       //'<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>';


            //       return result;
            //     },

            //   },

            // },




            // legend: {
            //   position: "bottom",
            //   horizontalAlign: "left",
            //   colors:  this.chartColors,
            // }
            //#region   work
            //{

            // this.chartOptions = {
            //   series: [
            //     {
            //       name: "Total Villages",
            //       group: "budget",
            //       data: this.barChartValue,
            //     },
            //     {
            //       name: "Total Societies",
            //       group: "actual",
            //       data:this.barChartSocietiesValue,
            //     },
            //     {
            //       name: "Pending Villages",
            //       group: "budget",
            //       data: this.pendingvillageList,
            //     },
            //     {
            //       name: "Pending Societies",
            //       group: "actual",
            //       data: this.pendingsocietyList,
            //     }
            //   ],
            //   chart: {
            //     type: "bar",
            //     height: 350,
            //     stacked: true
            //   },
            //   stroke: {
            //     width: 1,
            //     colors: ["#fff"]
            //   },
            //   dataLabels: {
            //     formatter: (val) => {
            //       return Number(val) / 1000 + "K";
            //     }
            //   },
            //   plotOptions: {
            //     bar: {
            //       horizontal: false
            //     }
            //   },
            //   xaxis: {
            //     categories:this.barChartTitle,
            //         tickPlacement: 'on',
            //         offsetY:60,
            //         labels:{
            //           rotate:90,

            //           },

            //     // [ "Online advertising",
            //     // "Sales Training",
            //     // "Print advertising",
            //     // "Catalogs" ]
            //      //this.barChartTitle
            //   },
            //   fill: {
            //      opacity: 1
            //   },  colors: this.barColors, 
            //  // colors: ["#80c7fd", "#008FFB", "#80f1cb", "#00E396"],
            //   yaxis: {
            //     labels: {
            //       formatter: (val) => {
            //         return val / 1000 + "K";
            //       }
            //     }
            //   },
            //   legend: {
            //     position: "top",
            //     horizontalAlign: "left"
            //   }


            ////////////////////////////////////
            // chart: {
            //   type: 'bar',
            //   height: 350,
            //   stacked: true,
            //   zoom: {
            //     enabled: true,
            //   },
            // },
            // plotOptions: {
            //   bar: {
            //     horizontal: false,
            //   },
            // },
            // stroke: {
            //   width: 1,
            //   colors: ['#fff'],
            // },
            // title: {
            //   text: '',
            // }, 

            // xaxis: {
            //   categories: this.barChartTitle,        
            //   tickPlacement: 'on',  
            //    offsetY:60,
            //    labels:{
            //      rotate:90,

            //    },

            // },
            // yaxis:  
            //    {  

            //   title: {
            //     text: undefined,

            //   },
            //    },
            // tooltip: {
            //   y: {
            //     formatter: function (val: any) {
            //       val = val.toString();
            //       let lastThree = val.substring(val.length - 3);
            //       let otherNumbers = val.substring(0, val.length - 3);
            //       if (otherNumbers != '') {
            //         lastThree = ',' + lastThree;
            //       }
            //       const result =
            //         otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
            //       return result + ' Litres';
            //     },
            //   },
            //   followCursor: true,
            // },
            // fill: {
            //   opacity: 1,
            //   colors: this.chartColors,
            // },
            // legend: {
            //   position: 'bottom',
            //   horizontalAlign: 'right',
            //   offsetX: 0,
            //   markers: {
            //     fillColors: this.chartColors,
            //   },
            // },
            //#endregion
            //}


        };
    }


    barChartRender_old(): void {


        this.chartOptions = {
            series: [

                {
                    name: "A1 Villages",
                    group: "actual",
                    data: this.barChartValue
                },
                {
                    name: "A1 Societies",
                    group: "budget",
                    data: this.barChartSocietiesValue
                },
                {
                    name: "A2 Villages",
                    group: "actual",
                    data: this.pendingvillageList
                },
                {
                    name: "A2 Societies",
                    group: "budget",
                    data: this.pendingsocietyList,
                }

            ],
            chart: {
                type: "bar",
                height: 350,
                stacked: true
            },
            stroke: {
                width: 1,
                colors: ["#fff"]
            },
            dataLabels: {
                formatter: (val) => {
                    return Number(val);/// 1000 + "K";
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false
                }
            },
            xaxis: {
                categories: this.barChartTitle,
            },
            fill: {
                opacity: 1
            },
            colors: ["#008FFB", "#00E396", "#FF4560", "#FF4560", "#80f1cb", "#00E396"],
            yaxis: {
                labels: {
                    formatter: (val) => {
                        return val + "";
                    }
                }
            },
            legend: {
                position: "bottom",
                horizontalAlign: "left"
            }
        };
    }


    pieChartRender(): void {
        this.pieChartOptions = {
            series: this.pieChartValue,
            chart: {
                height: 360,
                type: 'pie',
                toolbar: {
                    show: true,
                    tools: {
                        download: true,
                        selection: true,
                        zoom: true,
                        zoomin: true,
                        zoomout: true,
                        pan: true,
                        customIcons: [],
                    },
                },
            },
            labels: this.pieChartTitle,
            legend: {
                position: 'bottom',
                horizontalAlign: 'center',
                markers: {
                    fillColors: this.chartColors,
                },
            },
            fill: {
                colors: this.chartColors,
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
                            markers: {
                                fillColors: this.chartColors,
                            },
                        },
                    },
                },
            ],
            tooltip: {
                enabled: true,
                fillSeriesColor: false,
                marker: {
                    show: false,
                },
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
        };
    }

    dailycountsclick(DailyStatus: any): void {
        this.dailycounts = DailyStatus; this.cmucounts = undefined;
        this.onCountsClickChange.emit("true");
    }
    Cmucountsclick(CmuStatus: any): void {
        this.cmucounts = CmuStatus;
        this.dailycounts = undefined;
        this.onCountsClickChange.emit("false");
        //  if(CmuStatus=="2")
        //  {
        // this.loadReportsALL();
        // this.loadTodayCountsALL();
        //   this.loadDistrictWiseMilkPouredLitresALL();
        // //  this.loadDistrictWiseMilkPouredLitres(this.districtId);
        // this.loadDayWiseMilkPouredVillages(this.districtId);
        // return;

        // }

    }


}
