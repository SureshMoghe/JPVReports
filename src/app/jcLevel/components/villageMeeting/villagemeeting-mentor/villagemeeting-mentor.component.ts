import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { VillageMeetingMentorComponent } from 'src/app/villageMeeting/components/village-meeting-mentor/village-meeting-mentor.component';

@Component({
  selector: 'app-villagemeeting-mentor',
  templateUrl: './villagemeeting-mentor.component.html',
  styleUrls: ['./villagemeeting-mentor.component.css'],
})
export class VillagemeetingMentorComponent implements OnInit {
  @ViewChild(VillageMeetingMentorComponent)
  private villageMeetingMentor: VillageMeetingMentorComponent;
  input: any;
  districtId: any;
  districtName: any;
  fromDate: any;
  toDate: any;

  constructor(
    private utils: UtilsService,
    private route: ActivatedRoute,
    private router: Router,
    private session: SessionService,
    private toast: ToasterService
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
    this.fromDate = this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();
  }

  btnLoadReport(): void {
    if (
      this.fromDate === null ||
      this.fromDate === undefined ||
      this.fromDate === ''
    ) {
      this.toast.warning('From Date Is Empty');
      return;
    }
    if (
      this.toDate === null ||
      this.toDate === undefined ||
      this.toDate === ''
    ) {
      this.toast.warning('To Date Is Empty');
      return;
    }

    this.villageMeetingMentor.loadReport();
  }

  onMentorChange(result): void {
    this.router.navigate(['/jcLevel/villageLevelMeetingsRbkLevelReport'], {
      queryParams: { request: result },
    });
  }
}
