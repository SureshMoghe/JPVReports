import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexMarkers,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  ChartComponent,
} from 'ng-apexcharts';
import { NgxSpinnerService } from 'ngx-spinner';
import { interval } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { AdminDashboardService } from '../../services/admin-dashboard.service';

export type sessionStackedOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  fill: ApexFill;
};

export type semiDonutSessionChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  plotOptions: ApexPlotOptions;
  title: ApexTitleSubtitle;
  legend: ApexLegend;
  labels: any;
  grid: ApexGrid;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

export type sessionLineChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  fill: ApexFill;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  sessions: any;
  @ViewChild('chart') chartComponent: ChartComponent;
  public sessionStackedOptions: Partial<sessionStackedOptions>;
  public semiDonutSessionChartOptions: Partial<semiDonutSessionChartOptions>;
  public sessionLinechartOptions: Partial<sessionLineChartOptions>;

  interval: any;

  pieChart = {
    totalSessionActive: 0,
    totalSessionInActive: 0,
    totalSessions: 0,
  };

  barChart = {
    sessionActive: [],
    sessionInActive: [],
    sessionPool: [],
  };

  lineChart = {
    sessionLineActive: [],
    sessionLineInActive: [],
    timeLine: [],
  };

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private dashboardAPI: AdminDashboardService,
    private utils: UtilsService,
    private logger: LoggerService,
    private router: Router,
    private session: SessionService
  ) {}

  ngOnInit(): void {
    this.interval = interval(3000).subscribe((x) => {
      if (
        this.session.accessToken !== null &&
        this.session.accessToken !== '' &&
        this.session.accessToken !== undefined
      ) {
        this.loadSessions();
      }
    });
    this.loadSessions();
  }

  async loadSessions(): Promise<void> {
    try { debugger;
      this.pieChart.totalSessionActive = 0;
      this.pieChart.totalSessionInActive = 0;
      this.barChart.sessionActive = [];
      this.barChart.sessionInActive = [];
      this.barChart.sessionPool = [];

      // this.spinner.show();
      const res = await this.dashboardAPI.sessionDetails();
      if (res.success) {
        this.sessions = res.result;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.sessions.length; i++) {
          this.barChart.sessionActive.push(parseInt(this.sessions[i].ACTIVE));
          this.barChart.sessionInActive.push(
            // tslint:disable-next-line: radix
            parseInt(this.sessions[i].INACTIVE)
          );
          const category = `MACHINE : ${this.sessions[i].MACHINE}\n POOL : ${this.sessions[i].OSUSER}`;
          this.barChart.sessionPool.push(category);

          this.pieChart.totalSessionActive += parseInt(this.sessions[i].ACTIVE);
          // tslint:disable-next-line: radix
          this.pieChart.totalSessionInActive += parseInt(
            this.sessions[i].INACTIVE
          );
        }

        this.pieChart.totalSessions =
          this.pieChart.totalSessionActive + this.pieChart.totalSessionInActive;

        if (this.lineChart.sessionLineActive.length > 10) {
          this.lineChart.sessionLineActive.shift();
          this.lineChart.sessionLineInActive.shift();
          this.lineChart.timeLine.shift();
        }

        this.lineChart.sessionLineActive.push(this.pieChart.totalSessionActive);
        this.lineChart.sessionLineInActive.push(
          this.pieChart.totalSessionInActive
        );
        this.lineChart.timeLine.push(this.getTime());

        this.renderSessionStackedBar();
        this.renderSessionsSemiDonut();
        this.renderSessionLine();
      } else {
        this.toast.info(res.message);
      }
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  renderSessionStackedBar(): void {
    this.sessionStackedOptions = {
      series: [
        {
          name: 'ACTIVE',
          data: this.barChart.sessionActive,
        },
        {
          name: 'IN-ACTIVE',
          data: this.barChart.sessionInActive,
        },
      ],
      chart: {
        type: 'bar',
        height: 250,
        stacked: true,
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
        zoom: {
          enabled: true,
        },
        animations: {
          enabled: false,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      title: {
        text: 'DATABASE SESSIONS',
      },
      xaxis: {
        type: 'category',
        categories: this.barChart.sessionPool,
        labels: {
          show: false,
        },
      },
      legend: {
        position: 'bottom',
        offsetY: 10,
        markers: {
          fillColors: ['#00E396', '#FF4560'],
        },
      },
      fill: {
        opacity: 1,
        colors: ['#00E396', '#FF4560'],
      },
    };
  }

  renderSessionsSemiDonut(): void {
    this.semiDonutSessionChartOptions = {
      series: [
        this.pieChart.totalSessionActive,
        this.pieChart.totalSessionInActive,
      ],
      chart: {
        height: 250,
        type: 'donut',
        animations: {
          enabled: false,
        },
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
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10,
        },
      },
      legend: {
        position: 'right',
        offsetY: 10,
        markers: {
          fillColors: ['#00E396', '#FF4560'],
        },
      },
      grid: {
        padding: {
          bottom: -80,
        },
      },
      labels: ['ACTIVE', 'IN-ACTIVE'],
      title: {
        text: 'DATABASE TOTAL SESSIONS',
      },
      fill: {
        opacity: 1,
        colors: ['#00E396', '#FF4560'],
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'right',
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
      },
    };
  }

  renderSessionLine(): void {
    this.sessionLinechartOptions = {
      chart: {
        height: 250,
        type: 'line',
        stacked: true,
        animations: {
          enabled: false,
          easing: 'linear',
          dynamicAnimation: {
            speed: 1000,
          },
        },
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
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 5,
      },
      grid: {
        padding: {
          left: 0,
          right: 0,
        },
      },
      markers: {
        size: 0,
        hover: {
          size: 0,
        },
      },
      series: [
        {
          name: 'ACTIVE',
          data: this.lineChart.sessionLineActive,
        },
        {
          name: 'IN-ACTIVE',
          data: this.lineChart.sessionLineInActive,
        },
      ],
      xaxis: {
        type: 'category',
        categories: this.lineChart.timeLine,
        labels: {
          show: true,
        },
      },
      title: {
        text: 'SESSION TIME LINE',
        align: 'left',
        offsetY: 0,
        style: {
          fontSize: '12px',
        },
      },
      subtitle: {
        text: 'TOTAL SESSIONS : ' + this.pieChart.totalSessions,
        floating: true,
        align: 'right',
        offsetY: -3,
        offsetX: -40,
        style: {
          fontSize: '22px',
        },
      },
      legend: {
        show: true,
        floating: true,
        horizontalAlign: 'left',
        onItemClick: {
          toggleDataSeries: false,
        },
        position: 'top',
        offsetY: -20,
        offsetX: 60,
        markers: {
          fillColors: ['#00E396', '#FF4560'],
        },
      },
      fill: {
        opacity: 1,
        colors: ['#00E396', '#FF4560'],
      },
      colors: ['#00E396', '#FF4560'],
    };
  }

  getTime(): any {
    var d = new Date();
    return d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
  }

  ngOnDestroy() {
    if (this.interval) {
      this.interval.unsubscribe();
    }
  }
}
