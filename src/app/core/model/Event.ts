import {OrganizingUnit} from "./OrganizingUnit";

export interface Event {
  id: number;
  uuid: string;
  name: string;
  organizingUnit: OrganizingUnit;
  date: string;
  description: string;
  participantCount: number;
  userRegistered: boolean;
  imageUrl: string;
}
