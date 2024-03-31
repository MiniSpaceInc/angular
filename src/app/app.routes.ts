import { EventsViewComponent } from "./events/containers/events-view/events-view.component";
import { Routes } from '@angular/router';
import {
  RedirectAfterUsosLoginComponent
} from "./core/components/redirect-after-usos-login/redirect-after-usos-login.component";

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
    path: 'redirect',
    component: RedirectAfterUsosLoginComponent
  }
];
