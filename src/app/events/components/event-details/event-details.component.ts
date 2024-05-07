import {Component, Input} from '@angular/core';
import {CardModule} from "primeng/card";
import {SharedModule} from "primeng/api";
import {ToggleButtonModule} from "primeng/togglebutton";
import {Event} from "../../../core/model/Event";
import {ReactionsComponent} from "../../../core/components/reactions/reactions.component";

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [
    CardModule,
    SharedModule,
    ToggleButtonModule,
    ReactionsComponent
  ],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.scss'
})
export class EventDetailsComponent {
  @Input() event!: Event;
}
