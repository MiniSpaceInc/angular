import {Injectable} from '@angular/core';
import {OrganizingUnit} from "../OrganizingUnit";

@Injectable({
  providedIn: 'root'
})
export class OrganizingUnitFactory {
  createEmptyOrganizingUnit(): OrganizingUnit {
    return {
      id: 0,
      parentId: null,
      parent: null,
      isLeaf: true,
      name: ''
    };
  }
}
