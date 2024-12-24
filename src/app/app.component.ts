import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { LoggerService } from './shared/services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = '';
  noInterNetPopUp = false;

  constructor(public updates: SwUpdate, private logger: LoggerService) {

    let val = 0;
    window.addEventListener('online', () => {
      if (val === 1) {
        val = 0;
        this.noInterNetPopUp = false;
      }
    });

    window.addEventListener('offline', () => {
      val = 1;
      this.noInterNetPopUp = true;
    });

    if ('serviceWorker' in navigator && environment.production) {
      updates.available.subscribe((event) => {
        this.logger.log('update available : ', event);
        updates.activateUpdate().then(() => {
          document.location.reload();
        });
      });
      updates.checkForUpdate();
    }
  }
}
