import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ReportRestService} from "../../../core/service/report/report-rest.service";
import {StatusTypeEnum} from "../../../core/model/dto/StatusTypeEnum";
import {MessageService} from "primeng/api";
import {LocalStorageService} from "../../../core/service/local-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-report-form',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule
  ],
  templateUrl: './report-form.component.html',
  styleUrl: './report-form.component.scss'
})
export class ReportFormComponent {

  private reportService = inject(ReportRestService);
  private localStorageService = inject(LocalStorageService);
  private messageService = inject(MessageService);
  private router = inject(Router);
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      reportTitle: ['', Validators.required],
      reportContent: ['', Validators.required]
    });
  }

  sendReport() {
    this.reportService.addReport(
  {title: this.form.get('reportTitle')?.value,
         description: this.form.get('reportContent')?.value,
         status: StatusTypeEnum.NEW,
         id: this.localStorageService.getData('id'),
         uuid: null})
      .subscribe(
        () => this.messageService.add({
          severity: 'success',
          summary: 'Sukces',
          detail: 'Dodano nowe zgłoszenie'
        })
      );
    console.log('navigate reports')
    this.router.navigate(['/reports']);
  }
}
