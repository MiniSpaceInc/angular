import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-accept-decline',
  standalone: true,
  imports: [],
  templateUrl: './accept-decline.component.html',
  styleUrl: './accept-decline.component.scss'
})
export class AcceptDeclineComponent {
  @Output() accepted = new EventEmitter();
  @Output() declined = new EventEmitter();
}
