import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {OrganizingUnitFactory} from "../../../core/model/factory/OrganizingUnitFactory";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {OrganizingUnit} from "../../../core/model/OrganizingUnit";
import {OrganizingUnitRestService} from "../../../core/service/organizing-unit/organizing-unit-rest.service";

@Component({
  selector: 'app-organizing-unit-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './organizing-unit-form.component.html',
  styleUrl: './organizing-unit-form.component.scss'
})
export class OrganizingUnitFormComponent implements OnInit {
  @Input() parentUnit?: OrganizingUnit;
  @Output() save = new EventEmitter<void>();
  organizingUnitFactory = inject(OrganizingUnitFactory);
  organizingUnitService = inject(OrganizingUnitRestService);
  organizingUnit = this.organizingUnitFactory.createEmptyOrganizingUnit();

  ngOnInit() {
    if (this.parentUnit) {
      this.organizingUnit.parentId = this.parentUnit.id;
    }
  }

  saveOrganizingUnit(): void {
    this.organizingUnitService.saveOrganizingUnit(this.organizingUnit).subscribe(
      () => this.save.emit()
    );
  }
}
