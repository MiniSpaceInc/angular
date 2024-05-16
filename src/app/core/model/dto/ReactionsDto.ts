import {ReactionDetailsDto, ReactionType} from "../Reactions";

export interface ReactionsDto {
  userReaction: ReactionType | null;
  reactions: ReactionDetailsDto[];
}
