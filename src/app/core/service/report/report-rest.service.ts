import {inject, Injectable} from '@angular/core';
import {ReportService} from "./report.service";
import {UserReportedIssueDto} from "../../model/dto/UserReportedIssueDto";
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {PageableDto} from "../../model/dto/PageableDto";
import {ObjectPageDto} from "../../model/dto/ObjectPageDto";
import {ReportDetailsDto} from "../../model/dto/ReportDetailsDto";
import {StatusTypeEnum} from "../../model/dto/StatusTypeEnum";

@Injectable({
  providedIn: 'root'
})
export class ReportRestService implements ReportService {

  private http = inject(HttpClient);

  addReport(issue: UserReportedIssueDto): Observable<UserReportedIssueDto> {
    return this.http.post<UserReportedIssueDto>('api/reports/add', issue);
  }

  getUnresolvedReports(pageableDto: PageableDto): Observable<ObjectPageDto<UserReportedIssueDto>> {
    return this.http.post<ObjectPageDto<UserReportedIssueDto>>('api/reports/unresolved', pageableDto);
  }

  getDetails(uuid: string): Observable<ReportDetailsDto> {
    return this.http.get<ReportDetailsDto>('api/reports/' + uuid);
  }

  updateStatus(id: number, status: StatusTypeEnum): Observable<UserReportedIssueDto> {
    const params = new HttpParams()
      .set('status', status);
    return this.http.patch<UserReportedIssueDto>('api/reports/' + id, params);
  }

  getUsersReports(pageable: PageableDto): Observable<ObjectPageDto<UserReportedIssueDto>> {
    return this.http.post<ObjectPageDto<UserReportedIssueDto>>('/api/reports/myReports', pageable);
  }
}
