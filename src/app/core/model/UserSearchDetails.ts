import {PageableDto} from "./dto/PageableDto";

export interface UserSearchDetails {
  name: string;
  studentNumber: number | null;
  pageable: PageableDto;
}
