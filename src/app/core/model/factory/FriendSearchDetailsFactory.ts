import {inject, Injectable} from "@angular/core";
import {FriendSearchDetails} from "../dto/FriendSearchDetails";
import {PageableFactory} from "./PageableFactory";

@Injectable({
  providedIn: 'root'
})
export class FriendSearchDetailsFactory {
  pageableFactory = inject(PageableFactory);

  public createEmptySearchDetails(itemsPerPage: number): FriendSearchDetails {
    return this.pageableFactory.createPageableWithNoSorting(itemsPerPage);
  }
}
