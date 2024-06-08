import {PageableDto} from "./dto/PageableDto";

export interface EventSearchDetails {
  name: string;
  organizer: string;
  dateFrom: string;
  dateTo: string;
  pageable: PageableDto;
  searchInSubunits: boolean;
}
