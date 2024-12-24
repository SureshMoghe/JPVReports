import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PasswordupdateComponent } from './components/passwordupdate/passwordupdate.component';
import { ServerUnavailableComponent } from './components/server-unavailable/server-unavailable.component';
import { UnAuthorizedComponent } from './components/un-authorized/un-authorized.component';

const routes: Routes = [
  {
    path: 'PageNotFound',
    component: PageNotFoundComponent
  },
  {
    path: 'ServerUnavailable',
    component: ServerUnavailableComponent
  },
  {
    path: 'UnAuthorized',
    component: UnAuthorizedComponent
  },
  {
     
    path: 'PasswordUpdate',
    component:PasswordupdateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
