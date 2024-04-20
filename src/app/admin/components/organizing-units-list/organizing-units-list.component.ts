import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {OrganizingUnitMockService} from "../../../core/service/organizing-unit/organizing-unit-mock.service";
import {OrganizingUnit} from "../../../core/model/OrganizingUnit";
import {JsonPipe} from "@angular/common";
import {TreeModule} from "primeng/tree";
import {TreeNode} from "primeng/api";
import {CheckboxModule} from "primeng/checkbox";
import {FormsModule} from "@angular/forms";
import {OrganizingUnitRestService} from "../../../core/service/organizing-unit/organizing-unit-rest.service";
@Component({
  selector: 'app-organizing-units-list',
  standalone: true,
  imports: [
    JsonPipe,
    TreeModule,
    CheckboxModule,
    FormsModule
  ],
  templateUrl: './organizing-units-list.component.html',
  styleUrl: './organizing-units-list.component.scss'
})
export class OrganizingUnitsListComponent implements OnInit {
  @Input() interactionButton: boolean = false;
  @Input() interactionButtonText?: string;
  @Input() checkbox: boolean = false;
  @Input() checkedOrganizingUnitsIds: number[] = [];
  @Output() organizingUnitButtonClick = new EventEmitter<OrganizingUnit>();
  @Output() checkboxChange = new EventEmitter<OrganizingUnit>();
  organizingUnitService = inject(OrganizingUnitRestService);
  treeNodes: TreeNode<OrganizingUnit>[] = [];
  loading = false;

  ngOnInit() {
    this.organizingUnitService.getRootOrganizingUnits().subscribe(units =>
      this.treeNodes = units.map(this.toTreeNode)
    );
  }

  nodeExpand(node: TreeNode<OrganizingUnit>) {
    this.loading = true;
    this.organizingUnitService.getChildren(node.data!.id)
      .subscribe(children => {
        this.loading = false;
        node.children = children.map(this.toTreeNode);
      }
    );
  }

  toTreeNode(organizingUnit: OrganizingUnit): TreeNode<OrganizingUnit> {
    return {
      data: organizingUnit,
      label: organizingUnit.name,
      leaf: organizingUnit.isLeaf
    };
  }
}
