import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {UserReportedIssueDto} from "../../../core/model/dto/UserReportedIssueDto";
import {Router} from "@angular/router";
import {CardModule} from "primeng/card";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-reports-list',
  standalone: true,
  imports: [
    CardModule,
    NgFor
  ],
  templateUrl: './reports-list.component.html',
  styleUrl: './reports-list.component.scss'
})
export class ReportsListComponent {
  @Input() reports: UserReportedIssueDto[] = [];
  router: Router = inject(Router);

  onReportClick(report: UserReportedIssueDto) {
    console.log('navigate details')
    this.router.navigate(['/reports', report.uuid]);
  }
}
