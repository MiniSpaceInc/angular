import { Injectable } from '@angular/core';
import {OrganizingUnitService} from "./organizing-unit.service";
import {Observable, of} from "rxjs";
import {OrganizingUnit} from "../../model/OrganizingUnit";
import {organizingUnitsMembershipMock, organizingUnitsMock} from "./organizingUnitsMock";

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

  saveOrganizingUnit(organizingUnit: OrganizingUnit): Observable<any> {
    organizingUnit.id = organizingUnitsMock.length + 1;
    organizingUnitsMock.push(organizingUnit);
    const parent = organizingUnitsMock.filter(ou => ou.id === organizingUnit.parentId)[0];
    if(parent) {
      parent.isLeaf = false;
    }
    return of(1);
  }

  getUsersOrganizingUnits(userId: number): Observable<OrganizingUnit[]> {
    const unitsIds = organizingUnitsMembershipMock
      .filter(
        oum => oum.userId === userId
      ).map(
        oum => oum.organizingUnitId
      );

    return of(organizingUnitsMock.filter(ou => unitsIds.includes(ou.id)));
  }

  changeUserMembership(organizingUnitId: number, userId: number, add: boolean): Observable<any> {
    if(add) {
      organizingUnitsMembershipMock.push({
        userId: userId,
        organizingUnitId: organizingUnitId
      });
    } else {
      organizingUnitsMembershipMock.splice(
        organizingUnitsMembershipMock.findIndex(
          oum => oum.organizingUnitId === organizingUnitId && oum.userId === userId
        ), 1
      );
    }

    return of(1);
  }
}
