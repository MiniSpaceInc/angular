import { ToggleButtonModule } from 'primeng/togglebutton';
import {Component, inject, OnInit, PLATFORM_ID} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CardModule } from 'primeng/card';
import {AsyncPipe, isPlatformServer, NgFor} from '@angular/common';
import {mergeMap} from "rxjs";
import {EventDetailsComponent} from "../../components/event-details/event-details.component";
import {PostsListComponent} from "../../../posts/components/posts-list/posts-list.component";
import { CommentsComponent } from '../../../comments/comments.component';
import {EVENT_SERVICE, ORGANIZING_UNITS_SERVICE} from "../../../core/tokens";
import {EventService} from "../../../core/service/event/event.service";
import {MessageService} from "primeng/api";
import {DialogModule} from "primeng/dialog";
import {Event} from "../../../core/model/Event";

@Component({
  selector: 'app-event-view',
  standalone: true,
  imports: [
    CardModule,
    ToggleButtonModule,
    NgFor,
    EventDetailsComponent,
    CommentsComponent,
    PostsListComponent,
    AsyncPipe,
    DialogModule,
  ],
  templateUrl: './event-view.component.html',
  styleUrl: './event-view.component.scss'
})
export class EventViewComponent implements OnInit {
  eventService: EventService = inject(EVENT_SERVICE);
  organizingUnitService = inject(ORGANIZING_UNITS_SERVICE);
  route: ActivatedRoute = inject(ActivatedRoute);
  messageService = inject(MessageService);
  platformId = inject(PLATFORM_ID);
  router = inject(Router);
  deleteEventDialogVisible = false;
  event: Event | undefined;
  isOrganizer: boolean = false;

  ngOnInit() {
    if(isPlatformServer(this.platformId)) {
      return;
    }

    this.route.params.pipe(
      mergeMap(params => this.eventService.getEventByUuid(params['uuid']))
    ).subscribe(event => {
        this.event = event;
        this.organizingUnitService.isUserAssigned(event.organizingUnit.id).subscribe(
          isOrganizer => this.isOrganizer = isOrganizer
        )
    });
  }

  deleteEvent(): void {
    if(this.event === null) {
      return;
    }

    this.eventService.deleteEvent(this.event!.id).subscribe({
      error: () => this.messageService.add({
        severity: 'error',
        summary: 'Błąd',
        detail: 'Wystąpił nieoczekiwany błąd'
      }),
      complete: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Sukces',
          detail: 'Pomyślnie usunięto wydarzenie'
        });
        this.router.navigate(['/events']).then();
      }
    });
  }
}
