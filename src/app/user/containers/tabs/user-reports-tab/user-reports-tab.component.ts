import {Component, inject, OnInit, PLATFORM_ID} from '@angular/core';
import {UserReportedIssueDto} from "../../../../core/model/dto/UserReportedIssueDto";
import {ReportsListComponent} from "../../../../reports/components/reports-list/reports-list.component";
import {PageableFactory} from "../../../../core/model/factory/PageableFactory";
import {REPORT_SERVICE} from "../../../../core/tokens";
import {isPlatformBrowser} from "@angular/common";
import {PaginatorModule} from "primeng/paginator";
import {DialogModule} from "primeng/dialog";
import {ReportFormComponent} from "../../../../reports/components/report-form/report-form.component";

@Component({
  selector: 'app-user-reports-tab',
  standalone: true,
  imports: [
    ReportsListComponent,
    PaginatorModule,
    DialogModule,
    ReportFormComponent
  ],
  templateUrl: './user-reports-tab.component.html',
  styleUrl: './user-reports-tab.component.scss'
})
export class UserReportsTabComponent implements OnInit {
  private reportService = inject(REPORT_SERVICE);
  private platformId = inject(PLATFORM_ID);
  reports: UserReportedIssueDto[] = [];
  pageable = inject(PageableFactory).createPageableWithNoSorting(5);
  totalReports = 0;
  createReportVisible = false;

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)) {
      this.getReports();
    }
  }

  getReports(): void {
    this.reportService.getUsersReports(this.pageable).subscribe(
      page => {
        this.reports = page.content;
        this.totalReports = page.totalElements;
      }
    )
  }

  changePage(first: number | undefined, rows: number | undefined): void {
    if(first === undefined || rows === undefined) {
      return;
    }

    this.pageable.page = first / rows;
    this.pageable.size = rows;
    this.getReports();
  }
}
