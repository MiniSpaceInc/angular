import {Component, inject, Input} from '@angular/core';
import {UserReportedIssueDto} from "../../../core/model/dto/UserReportedIssueDto";
import {Router} from "@angular/router";
import {CardModule} from "primeng/card";
import {NgFor, NgStyle} from "@angular/common";
import {StatusTextMap} from "../../../core/model/dto/StatusTypeEnum";

@Component({
  selector: 'app-reports-list',
  standalone: true,
  imports: [
    CardModule,
    NgFor,
    NgStyle
  ],
  templateUrl: './reports-list.component.html',
  styleUrl: './reports-list.component.scss'
})
export class ReportsListComponent {
  @Input() reports: UserReportedIssueDto[] = [];
  router: Router = inject(Router);

  onReportClick(report: UserReportedIssueDto) {
    this.router.navigate(['/reports', report.uuid]);
  }

  protected readonly StatusTextMap = StatusTextMap;
}
