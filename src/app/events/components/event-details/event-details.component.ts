import {Component, inject, Input, OnInit} from '@angular/core';
import {CardModule} from "primeng/card";
import {SharedModule} from "primeng/api";
import {ToggleButtonModule} from "primeng/togglebutton";
import {Event} from "../../../core/model/Event";
import {ReactionsComponent} from "../../../core/components/reactions/reactions.component";
import {EVENT_SERVICE, FRIEND_SERVICE} from "../../../core/tokens";
import {FormsModule} from "@angular/forms";
import {User} from "../../../core/model/User";
import {DialogModule} from "primeng/dialog";
import {DataViewModule} from "primeng/dataview";

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [
    CardModule,
    SharedModule,
    ToggleButtonModule,
    ReactionsComponent,
    FormsModule,
    DialogModule,
    DataViewModule
  ],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.scss'
})
export class EventDetailsComponent implements OnInit {
  @Input() event!: Event;

  private eventService = inject(EVENT_SERVICE);
  private friendService = inject(FRIEND_SERVICE);

  registeredFriends: User[] = [];
  friendsDialogVisible = false;

  ngOnInit() {
    this.friendService.getFriendsRegisteredForEvent(this.event.id).subscribe(
      friends => this.registeredFriends = friends
    );
  }

  changeEventRegistration(alreadyRegistered: boolean):void {
    if(alreadyRegistered) {
      this.eventService.cancelEventRegistration(this.event.id).subscribe(() => this.refreshEvent());
    } else {
      this.eventService.signUpForEvent(this.event.id).subscribe(() => this.refreshEvent());
    }
  }

  private refreshEvent():void {
    this.eventService.getEventByUuid(this.event.uuid).subscribe(event => this.event = event);
  }
}
