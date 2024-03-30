import {PageableDto} from "./dto/PageableDto";

export interface EventSearchDetails {
  itemsPerPage: number;
  page: number;
  name: string;
  organizer: string;
  dateFrom: string;
  dateTo: string;
  pageable: PageableDto;
}
