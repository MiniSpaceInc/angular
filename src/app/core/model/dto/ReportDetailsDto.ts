import {User} from "../User";
import {StatusTypeEnum} from "./StatusTypeEnum";

export interface ReportDetailsDto {
  id: number;
  uuid: string;
  title: string;
  description: string;
  user: User;
  updatedBy: User;
  status: StatusTypeEnum;
}
