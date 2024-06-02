import {UserReportedIssueDto} from "../../model/dto/UserReportedIssueDto";
import {Observable} from "rxjs";

export interface ReportService {
  addReport(issue: UserReportedIssueDto): Observable<UserReportedIssueDto>;
}
