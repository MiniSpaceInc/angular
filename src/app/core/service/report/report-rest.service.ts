import {inject, Injectable} from '@angular/core';
import {ReportService} from "./report.service";
import {UserReportedIssueDto} from "../../model/dto/UserReportedIssueDto";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReportRestService implements ReportService {

  private http = inject(HttpClient);

  addReport(issue: UserReportedIssueDto): Observable<UserReportedIssueDto> {
    return this.http.post<UserReportedIssueDto>('api/reports/add', issue);
  }

}
