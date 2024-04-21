import {inject, Injectable} from '@angular/core';
import { OrganizingUnitService } from './organizing-unit.service';
import {Observable} from "rxjs";
import {OrganizingUnit} from "../../model/OrganizingUnit";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OrganizingUnitRestService implements OrganizingUnitService {

  private http = inject(HttpClient);

  changeUserMembership(organizingUnitId: number, userId: number, add: boolean): Observable<any> {
    if(add) {
      return this.http.post(`/api/organizingUnits/${organizingUnitId}/user?userId=${userId}`, null);
    }

    return this.http.delete(`/api/organizingUnits/${organizingUnitId}/user?userId=${userId}`);
  }

  getChildren(parentId: number): Observable<OrganizingUnit[]> {
    return this.http.get<OrganizingUnit[]>(`/api/organizingUnits/${parentId}/children`);
  }

  getRootOrganizingUnits(): Observable<OrganizingUnit[]> {
    return this.http.get<OrganizingUnit[]>('/api/organizingUnits/roots');
  }

  getUsersOrganizingUnits(userId: number | null): Observable<OrganizingUnit[]> {
    return this.http.get<OrganizingUnit[]>(`api/organizingUnits/ofUser` + (userId ? `?userId=${userId}` : ''))
  }

  saveOrganizingUnit(organizingUnit: OrganizingUnit): Observable<any> {
    return this.http.post('/api/organizingUnits', organizingUnit)
  }
}
