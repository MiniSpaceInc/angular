import {Reactions, ReactionType} from "./Reactions";

export interface Post {
  id: number;
  uuid: string;
  author: string;
  date: string;
  content: string;
  reactionsList: Reactions[];
  userReaction: ReactionType | null
}
