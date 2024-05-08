import {OrganizingUnit} from "./OrganizingUnit";
import {Reactions, ReactionType} from "./Reactions";

export interface Event {
  id: number;
  uuid: string;
  name: string;
  organizingUnit: OrganizingUnit;
  date: string;
  description: string;
  reactionsList: Reactions[];
  userReaction: ReactionType | null;
}
