import { Routes } from '@angular/router';
import {EventsViewComponent} from "./events/containers/events-view/events-view.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'events',
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventsViewComponent
  }
];
