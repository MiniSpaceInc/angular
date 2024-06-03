import {UserReportedIssueDto} from "../../model/dto/UserReportedIssueDto";
import {Observable} from "rxjs";
import {PageableDto} from "../../model/dto/PageableDto";
import {ObjectPageDto} from "../../model/dto/ObjectPageDto";
import {ReportDetailsDto} from "../../model/dto/ReportDetailsDto";
import {StatusTypeEnum} from "../../model/dto/StatusTypeEnum";

export interface ReportService {
  addReport(issue: UserReportedIssueDto): Observable<UserReportedIssueDto>;
  getUnresolvedReports(pageableDto: PageableDto): Observable<ObjectPageDto<UserReportedIssueDto>>;
  getDetails(uuid: String): Observable<ReportDetailsDto>;
  updateStatus(id: number, status: StatusTypeEnum): Observable<UserReportedIssueDto>;
  getUsersReports(pageable: PageableDto): Observable<ObjectPageDto<UserReportedIssueDto>>;
}
