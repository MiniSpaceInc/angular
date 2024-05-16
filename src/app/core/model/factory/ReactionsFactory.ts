import {Injectable} from "@angular/core";
import {ReactionsDto} from "../dto/ReactionsDto";

@Injectable({
  providedIn: 'root'
})
export class ReactionsFactory {
  public createEmptyReactionsDto(): ReactionsDto {
    return {
      userReaction: null,
      reactions: []
    }
  }
}
