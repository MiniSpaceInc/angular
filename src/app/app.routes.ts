import { EventViewComponent } from "./events/containers/event-view/event-view.component";
import { EventsViewComponent } from "./events/containers/events-view/events-view.component";
import { Routes } from '@angular/router';
import {
  RedirectAfterUsosLoginComponent
} from "./core/components/redirect-after-usos-login/redirect-after-usos-login.component";
import {AdminConsoleComponent} from "./admin/containers/admin-console/admin-console.component";
import {UserProfileComponent} from "./user/containers/user-profile/user-profile.component";
import {ReportDetailsComponent} from "./reports/components/report-details/report-details.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'events',
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventsViewComponent
  },
  {
    path: 'events/:uuid',
    component: EventViewComponent
  },
  {
    path: 'redirect',
    component: RedirectAfterUsosLoginComponent
  },
  {
    path: 'admin',
    component: AdminConsoleComponent
  },
  {
    path: 'user',
    component: UserProfileComponent
  },
  {
    path: 'reports/:uuid',
    component: ReportDetailsComponent
  }
];
