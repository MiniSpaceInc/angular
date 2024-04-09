import { Injectable } from '@angular/core';
import {OrganizingUnitService} from "./organizing-unit.service";
import {Observable, of} from "rxjs";
import {OrganizingUnit} from "../../model/OrganizingUnit";
import {organizingUnitsMock} from "./organizingUnitsMock";

@Injectable({
  providedIn: 'root'
})
export class OrganizingUnitMockService implements OrganizingUnitService {
  createNewOrganizingUnit(): Observable<any> {
    return of(1);
  }

  getChildren(parentId: number): Observable<OrganizingUnit[]> {
    return of(organizingUnitsMock.filter(ou => ou.parentId === parentId));
  }

  getRootOrganizingUnits(): Observable<OrganizingUnit[]> {
    return of(organizingUnitsMock.filter(ou => ou.parentId === null));
  }

}
