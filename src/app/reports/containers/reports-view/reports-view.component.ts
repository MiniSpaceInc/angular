import {Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {ReportsListComponent} from "../../components/reports-list/reports-list.component";
import {PageableFactory} from "../../../core/model/factory/PageableFactory";
import {ReportRestService} from "../../../core/service/report/report-rest.service";
import {UserReportedIssueDto} from "../../../core/model/dto/UserReportedIssueDto";

@Component({
  selector: 'app-reports-view',
  standalone: true,
  imports: [
    ReportsListComponent
  ],
  templateUrl: './reports-view.component.html',
  styleUrl: './reports-view.component.scss'
})
export class ReportsViewComponent implements OnInit {

  pageableFactory = inject(PageableFactory);
  reportService = inject(ReportRestService);

  reports: UserReportedIssueDto[] = [];
  selectedReport: UserReportedIssueDto | undefined;
  ngOnInit(): void {
    this.reportService.getUnresolvedReports(this.pageableFactory.createPageableWithNoSorting(10))
      .subscribe((reports) => this.reports = reports.content);

  }

}
