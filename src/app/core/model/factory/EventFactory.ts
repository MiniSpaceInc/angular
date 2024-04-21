import {inject, Injectable} from '@angular/core';
import { Event } from '../Event';
import {OrganizingUnitFactory} from "./OrganizingUnitFactory";

@Injectable({
  providedIn: 'root'
})
export class EventFactory {
  organizingUnitFactory = inject(OrganizingUnitFactory);

  createEmptyEvent(): Event {
    return {
        id: 0,
        uuid: '',
        name: '',
        organizingUnit: this.organizingUnitFactory.createEmptyOrganizingUnit(),
        date: '',
        description: '',
    };
  }
}
