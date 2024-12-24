import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'shared',
    loadChildren: () =>
      import('./shared/shared.module').then((m) => m.SharedModule),
  },
  {
    path: 'state',
    loadChildren: () =>
      import('./stateLevel/state-level.module').then((m) => m.StateLevelModule),
  },
  {
    path: 'district',
    loadChildren: () =>
      import('./districtLevel/district.module').then((m) => m.DistrictModule),
  },
  {
    path: 'mentor',
    loadChildren: () =>
      import('./mentorLevel/mentor-level.module').then((m) => m.MentorLevelModule),
  },
  {
    path: 'stateLevelLDM',
    loadChildren: () =>
      import('./stateLevelLDM/state-level-ldm.module').then((m) => m.StateLevelLDMModule),
  },
  {
    path: 'districtLevelLDM',
    loadChildren: () =>
      import('./districtLevelLDM/district-level-ldm.module').then((m) => m.DistrictLevelLDMModule),
  },
  {
    path: 'adminDashboard',
    loadChildren: () =>
      import('./adminDashboard/admin-dashboard.module').then((m) => m.AdminDashboardModule),
  },
  {
    path: 'stateLevelSLBC',
    loadChildren: () =>
      import('./stateLevelSLBC/state-level-slbc.module').then((m) => m.StateLevelSLBCModule),
  },
  {
    path: 'daLevel',
    loadChildren: () =>
      import('./daLevel/da-level.module').then((m) => m.DaLevelModule),
  },
  {
    path: 'ahLevel',
    loadChildren: () =>
      import('./ahLevel/ah-level.module').then((m) => m.AhLevelModule),
  },
  {
    path: 'jdLevel',
    loadChildren: () =>
      import('./jdLevel/jd-level.module').then((m) => m.JdLevelModule),
  },
  {
    path: 'civilEngLevel',
    loadChildren: () =>
      import('./civilEngLevel/ce-level.module').then((m) => m.CeLevelModule),
  },
  {
    path: 'districtHO',
    loadChildren: () =>
      import('./districtHO/district-ho.module').then((m) => m.DistrictHOModule),
  },

  {
    path: 'prompt-module',
    loadChildren: () =>
      import('./prompt-module/prompt-module.module').then((m) => m.PromptModuleModule),
  },

  {
    path: 'jcLevel',
    loadChildren: () =>
      import('./jcLevel/jc-level.module').then((m) => m.JcLevelModule),
  },
  {
    path: 'dcLevel',
    loadChildren: () =>
      import('./dcLevel/dc-level.module').then((m) => m.DcLevelModule),
  },
  {
    path: 'secretaryLevel',
    loadChildren: () =>
      import('./secretaryLevel/secretary-level.module').then((m) => m.SecretaryLevelModule),
  },
  {
    path: 'asstSecLevel',
    loadChildren: () =>
      import('./asstSecLevel/asst-sec-level.module').then((m) => m.AsstSecLevelModule),
  },
  {
    path: 'welfareAsstLevel',
    loadChildren: () =>
      import('./welfareAsstLevel/welfare-asst-level.module').then((m) => m.WelfareAsstLevelModule),
  },
  {
    path: 'animalHusbLevel',
    loadChildren: () =>
      import('./animalHusbLevel/animal-husb-level.module').then((m) => m.AnimalHusbAsstLevelModule),
  },
  {
    path: 'seLevel',
    loadChildren: () =>
      import('./seLevel/se-level.module').then((m) => m.SeLevelModule),
  },
  {
    path: 'dccbLevel',
    loadChildren: () =>
      import('./dccbLevel/dccb-level.module').then((m) => m.DccbLevelModule),
  },
  {
    path: 'mandalLevel',
    loadChildren: () =>
      import('./mandalLevel/mandal-level.module').then((m) => m.MandalLevelModule),
  },

  {
    path: 'NotificationModule',
    loadChildren: () =>
    import('./notification-module/notification-module.module').then((m) => m.NotificationModuleModule),  
     
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
