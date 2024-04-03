import { EventViewComponent } from "./events/components/event-view/event-view.component";
import { EventsViewComponent } from "./events/containers/events-view/events-view.component";
import { Routes } from '@angular/router';

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
    path: 'events/:id',
    component: EventViewComponent
  }
];
