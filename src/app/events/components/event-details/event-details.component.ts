import {Component, inject, Input} from '@angular/core';
import {CardModule} from "primeng/card";
import {SharedModule} from "primeng/api";
import {ToggleButtonModule} from "primeng/togglebutton";
import {Event} from "../../../core/model/Event";
import { Comment } from '../../../core/model/Comment';
import {ReactionsComponent} from "../../../core/components/reactions/reactions.component";
import {EVENT_SERVICE} from "../../../core/tokens";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [
    CardModule,
    SharedModule,
    ToggleButtonModule,
    ReactionsComponent,
    FormsModule
  ],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.scss'
})
export class EventDetailsComponent {
  @Input() event!: Event;

  private eventService = inject(EVENT_SERVICE);

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
