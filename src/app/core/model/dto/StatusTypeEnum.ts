
export enum StatusTypeEnum {
  NEW = "NEW",
  REJECTED = "REJECTED",
  IN_PROGRESS = "IN_PROGRESS",
  CLOSED = "CLOSED"
}

export const StatusTextMap = new Map<StatusTypeEnum, string>([
  [StatusTypeEnum.NEW, 'Nowe'],
  [StatusTypeEnum.REJECTED, 'Odrzucone'],
  [StatusTypeEnum.IN_PROGRESS, 'W trakcie rozpatrywania'],
  [StatusTypeEnum.CLOSED, 'Zamknięte'],
])
