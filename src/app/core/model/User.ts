import {Role} from "./Role";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  studentNumber: number;
  usosId: number;
  roles: Role[];
}
