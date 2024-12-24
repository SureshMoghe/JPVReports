import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from 'src/app/stateLevel/services/state.service';
import { CommonComponent } from '../common/common.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username: any;
  Password: any; 
  masterId: any; 
  constructor(
    private router: Router,
     private amulurl: StateService,
     private spinner: NgxSpinnerService,
     private utils: UtilsService,
      private toast: ToasterService,
      private session:SessionService,
      private componentFactoryResolver: ComponentFactoryResolver,
      private viewContainerRef: ViewContainerRef
     ) {}

  ngOnInit(): void {
  }
  

async btnLogin(): Promise<void> {debugger;
  try { window.sessionStorage.clear();
    if (
      this.username === '' ||
      this.username === undefined ||
      this.username === null
    ) {
      this.toast.warning('Please Enter Username');
      return;
    }

    if (
      this.Password === '' ||
      this.Password === undefined ||
      this.Password === null
    ) {
      this.toast.warning('Please Enter Password');
      return;
    }  
    const req = {
      TYPE:'16',
      EMAIL_ID: this.username,
      FISRT_NAME: this.Password 
  
    };
    this.spinner.show();debugger; 
    const res = await this.amulurl.NotificationsForJobDetails(req);
    this.spinner.hide(); 
    if (res.result[0].MASTER_ID !=0) {
    const userDetails = res.result[0]; 
debugger;
    if ( res.result[0].MASTER_ID !=null || res.result[0].MASTER_ID ===undefined ) {
      sessionStorage.setItem('masterId', res.result[0].MASTER_ID);
      sessionStorage.setItem('EmailId', res.result[0].MOBILE_NUMBER);

      this.session.masterId = sessionStorage.getItem('masterId');         
      this.session.EmailId = sessionStorage.getItem('EmailId');  

        this.router.navigateByUrl('/app-common', { skipLocationChange: true }).then(() => {
         
          window.location.reload(); 
      });
    }  
      this.router.navigate(['/NotificationModule']); 
    }  
    else{
      this.toast.warning("Invalid User Name And Password");
    } 
    }
  
    catch (error) { 
    alert(error.error.error_description);
    console.log(error);
    this.spinner.hide();
  }

}


  GoTopage() {
      this.router.navigate(['/NotificationModule/RegistrationDetails']);

    }
}
