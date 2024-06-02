import {Component, inject, OnInit} from '@angular/core';
import {CardModule} from "primeng/card";
import {ReportRestService} from "../../../core/service/report/report-rest.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ReportDetailsDto} from "../../../core/model/dto/ReportDetailsDto";
import {ButtonModule} from "primeng/button";
import {NgStyle} from "@angular/common";
import {StatusTypeEnum} from "../../../core/model/dto/StatusTypeEnum";
import {MessageService} from "primeng/api";

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
  router = inject(Router);

  protected readonly StatusTypeEnum = StatusTypeEnum;
  reportDetails: ReportDetailsDto | undefined;
  status: StatusTypeEnum | undefined;

  ngOnInit(): void {
    const uuid = this.route.snapshot.params['uuid'];
    console.log(uuid);
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
      .subscribe(
        () => this.messageService.add({
          severity: 'success',
          summary: 'Sukces',
          detail: 'Zaktualizowano status zgłoszenia na: ' + status
        }),
        (err) => this.messageService.add({
          severity: 'error',
          summary: 'Błąd',
          detail: 'Nie udało się zaktualizować statusu zgłoszenia: ' + err
        })
      );
    window.location.reload();
  }

  goBack() {
    this.router.navigate(['/reports'])
  }

}
