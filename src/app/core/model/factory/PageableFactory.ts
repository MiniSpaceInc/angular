import {inject, Injectable} from "@angular/core";
import {SortFactory} from "./SortFactory";
import {PageableDto} from "../dto/PageableDto";

@Injectable({
  providedIn: 'root'
})
export class PageableFactory {
  sortFactory = inject(SortFactory);

  createPageableWithNoSorting(itemsPerPage: number): PageableDto {
    return {
      page: 0,
      size: itemsPerPage,
      sort: this.sortFactory.createEmptySort()
    };
  }
}
