export interface ReactionDetailsDto {
  type: ReactionType;
  count: number;
}

export enum ReactionType {
  LOVE, HAHA, WOW
}

export const ReactionTypeNameMap = new Map<number, string>([
  [ReactionType.LOVE, 'LOVE'],
  [ReactionType.HAHA, 'HAHA'],
  [ReactionType.WOW, 'WOW']
]);
