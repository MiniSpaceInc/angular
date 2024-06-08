import {Observable} from "rxjs";
import {OrganizingUnit} from "../../model/OrganizingUnit";

export interface OrganizingUnitService {
  getRootOrganizingUnits(): Observable<OrganizingUnit[]>;
  getChildren(parentId: number): Observable<OrganizingUnit[]>;
  saveOrganizingUnit(organizingUnit: OrganizingUnit): Observable<any>;
  getUsersOrganizingUnits(userId: number | null): Observable<OrganizingUnit[]>;
  changeUserMembership(organizingUnitId: number, userId: number, add: boolean): Observable<any>;
  isUserAssigned(organizingUnitId: number): Observable<boolean>;
}
