import {Injectable} from "@angular/core";
import {SortDto} from "../dto/SortDto";

@Injectable({
  providedIn: 'root'
})
export class SortFactory {
  createEmptySort(): SortDto {
    return {
      sortBy: [] as string[],
      direction: ''
    };
  }
}
