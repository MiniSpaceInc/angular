import {Component, inject, OnInit} from '@angular/core';
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import {EventInvitation} from "../../../core/model/EventInvitation";
import {PageableFactory} from "../../../core/model/factory/PageableFactory";
import {EVENT_SERVICE} from "../../../core/tokens";
import {AcceptDeclineComponent} from "../../../core/components/accept-decline/accept-decline.component";

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

  invitations: EventInvitation[] = [];
  pageable = inject(PageableFactory).createPageableWithNoSorting(5);
  totalInvitations = 0;

  ngOnInit(): void {
    this.loadInvitations();
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
