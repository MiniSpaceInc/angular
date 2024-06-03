import {Component, inject, OnInit, PLATFORM_ID} from '@angular/core';
import {CardModule} from "primeng/card";
import {ReportRestService} from "../../../core/service/report/report-rest.service";
import {ActivatedRoute} from "@angular/router";
import {ReportDetailsDto} from "../../../core/model/dto/ReportDetailsDto";
import {ButtonModule} from "primeng/button";
import {isPlatformBrowser, NgStyle} from "@angular/common";
import {StatusTypeEnum} from "../../../core/model/dto/StatusTypeEnum";
import {MessageService} from "primeng/api";
import {Location} from '@angular/common';

@Component({
  selector: 'app-report-details',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    NgStyle
  ],
  templateUrl: './report-details.component.html',
  styleUrl: './report-details.component.scss'
})
export class ReportDetailsComponent implements OnInit {

  reportService = inject(ReportRestService);
  messageService = inject(MessageService);
  route = inject(ActivatedRoute);
  location = inject(Location);
  platformId = inject(PLATFORM_ID);

  protected readonly StatusTypeEnum = StatusTypeEnum;
  reportDetails: ReportDetailsDto | undefined;
  status: StatusTypeEnum | undefined;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const uuid = this.route.snapshot.params['uuid'];
    this.reportService.getDetails(uuid).subscribe(
      (details) => {
        this.reportDetails = details;
        this.status = details.status;
      }
    );
  }

  updateStatus(status: StatusTypeEnum) {
    if (this.reportDetails === undefined) return;
    this.reportService.updateStatus(this.reportDetails?.id, status)
      .subscribe({
          error: (err) => this.messageService.add({
            severity: 'error',
            summary: 'Błąd',
            detail: 'Nie udało się zaktualizować statusu zgłoszenia: ' + err
          }),
          complete: () => this.messageService.add({
            severity: 'success',
            summary: 'Sukces',
            detail: 'Zaktualizowano status zgłoszenia na: ' + status
          }),
        }
      );
    window.location.reload();
  }

  goBack() {
    this.location.back();
  }
}
