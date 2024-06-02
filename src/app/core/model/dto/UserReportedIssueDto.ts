import {StatusTypeEnum} from "./StatusTypeEnum";

export interface UserReportedIssueDto {
  id: number | null;
  uuid: string | null;
  title: string;
  description: string;
  status: StatusTypeEnum ;
}
