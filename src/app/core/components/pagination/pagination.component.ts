import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  protected readonly Array = Array;
  currentPage = 0;
  @Input() pageCount!: number;
  @Output() pageChange = new EventEmitter<number>();

  changePage(page: number) {
    this.currentPage = page;
    this.pageChange.emit(this.currentPage);
  }

  nextPage() {
    this.currentPage++;
    this.pageChange.emit(this.currentPage);
  }

  previousPage() {
    this.currentPage--;
    this.pageChange.emit(this.currentPage);
  }
}
