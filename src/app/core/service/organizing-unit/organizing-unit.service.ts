import {Observable} from "rxjs";
import {OrganizingUnit} from "../../model/OrganizingUnit";

export interface OrganizingUnitService {
  createNewOrganizingUnit(): Observable<any>;
  getRootOrganizingUnits(): Observable<OrganizingUnit[]>;
  getChildren(parentId: number): Observable<OrganizingUnit[]>;
}
