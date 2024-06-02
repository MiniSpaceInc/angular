import {Component, inject, OnInit, PLATFORM_ID} from '@angular/core';
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import {EventInvitation} from "../../../core/model/EventInvitation";
import {PageableFactory} from "../../../core/model/factory/PageableFactory";
import {EVENT_SERVICE} from "../../../core/tokens";
import {AcceptDeclineComponent} from "../../../core/components/accept-decline/accept-decline.component";
import {isPlatformBrowser} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-event-invitations',
  standalone: true,
  imports: [
    CardModule,
    TableModule,
    AcceptDeclineComponent
  ],
  templateUrl: './event-invitations.component.html',
  styleUrl: './event-invitations.component.scss'
})
export class EventInvitationsComponent implements OnInit{
  private eventService = inject(EVENT_SERVICE);
  private router = inject(Router);

  invitations: EventInvitation[] = [];
  pageable = inject(PageableFactory).createPageableWithNoSorting(5);
  platformId = inject(PLATFORM_ID);
  totalInvitations = 0;

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)) {
      this.loadInvitations();
    }
  }

  navigateToEvent(eventUuid: string): void {
    this.router.navigate([`/events/${eventUuid}`]).then();
  }

  pageChange(first: number, rows: number): void {
    this.pageable.page = first / rows;
    this.pageable.size = rows;
    this.loadInvitations();
  }

  loadInvitations(): void {
    this.eventService.getEventInvitationsPage(this.pageable).subscribe(
      page => {
        this.invitations = page.content;
        this.totalInvitations = page.totalElements;
      }
    )
  }

  acceptInvitation(invitationId: number): void {
    this.eventService.acceptEventInvitation(invitationId).subscribe(() => this.loadInvitations());
  }

  declineInvitation(invitationId: number): void {
    this.eventService.declineEventInvitation(invitationId).subscribe(() => this.loadInvitations());
  }
}
