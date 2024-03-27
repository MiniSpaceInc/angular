import {SortDto} from "./SortDto";

export interface PageableDto {
    page: number;
    size: number;
    sort: SortDto;
}
