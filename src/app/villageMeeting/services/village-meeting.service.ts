import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Injectable({
  providedIn: 'root',
})
export class VillageMeetingService {
  baseURL = '';
  villageMeetingBaseURL = '';
  rptsbaseURL= '';

  constructor(private httpClient: HttpClient, private utils: UtilsService) {
    this.baseURL = utils.baseUrl() + 'api/villageMeeting/';
    this.villageMeetingBaseURL = utils.crystalReportsUrl() + 'api/villageMeeting/';

    this.rptsbaseURL = utils.jpvbaseURL() + 'api/rptsvillageMeeting/';

  }

  public stateLevelScheduleReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}stateLevelReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public MentorLevelReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.rptsbaseURL}MentorLevelReport`,  //   baseURL
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public RbkLevelReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}RbkLevelReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public villageLevelReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}villageLevelReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public personsAttendentReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}personsAttendentReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }
  public milkCollectionFuncReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}milkCollectionFuncReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public secretaryAssistantSecretaryReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}secretaryAssistantSecretaryReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public BuildingInspectReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}BuildingInspectReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public CalibrationReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}CalibrationReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public PromotersReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}PromotersReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  // Crystal Reports

  public stateLevelVillageMeetingPDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.villageMeetingBaseURL}stateLevelReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public mentorLevelVillageMeetingPDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.villageMeetingBaseURL}MentorLevelReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public RbkLevelVillageMeetingPDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.villageMeetingBaseURL}RbkLevelReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public villageLevelVillageMeetingPDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.villageMeetingBaseURL}villageLevelReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public personsAttendentVillageMeetingPDFReport(req): Promise<any> {
    // tslint:disable-next-line: max-line-length
    const result: any = this.httpClient
      .post(
        `${this.villageMeetingBaseURL}personsAttendentReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public milkCollectionFuncVillageMeetingPDFReport(req): Promise<any> {
    // tslint:disable-next-line: max-line-length
    const result: any = this.httpClient
      .post(
        `${this.villageMeetingBaseURL}milkCollectionFuncReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public secAsstSecVillageMeetingPDFReport(req): Promise<any> {
    // tslint:disable-next-line: max-line-length
    const result: any = this.httpClient
      .post(
        `${this.villageMeetingBaseURL}secretaryAssistantSecretaryReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public BuildingInspectVillageMeetingPDFReport(req): Promise<any> {
    // tslint:disable-next-line: max-line-length
    const result: any = this.httpClient
      .post(
        `${this.villageMeetingBaseURL}BuildingInspectReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public CalibrationVillageMeetingPDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.villageMeetingBaseURL}CalibrationReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public PromotersVillageMeetingPDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.villageMeetingBaseURL}PromotersReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  // Crystal Reports End
}
