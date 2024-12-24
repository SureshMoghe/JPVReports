import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {

  
  baseURL = '';

  constructor(
    private httpClient: HttpClient,
    private utils: UtilsService
  ) {

    this.baseURL = utils.baseUrl() + 'api/adminDashboard/';
  }


  public sessionDetails() {
    const result: any = this.httpClient.get(`${this.baseURL}sessionDetails`,  this.utils.getGetHttpOptions()).pipe(
      retry(this.utils.env.API_RETRY_COUNT)
    ).toPromise();
    return result;
  }

}
