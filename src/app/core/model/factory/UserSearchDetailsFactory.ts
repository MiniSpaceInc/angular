import {inject, Injectable} from "@angular/core";
import {UserSearchDetails} from "../UserSearchDetails";
import {PageableFactory} from "./PageableFactory";

@Injectable({
  providedIn: 'root'
})
export class UserSearchDetailsFactory {
  pageableFactory = inject(PageableFactory);

  createEmptyUserSearchDetails(usersPerPage: number): UserSearchDetails {
    return {
      name: '',
      studentNumber: null,
      pageable: this.pageableFactory.createPageableWithNoSorting(usersPerPage)
    }
  }
}
