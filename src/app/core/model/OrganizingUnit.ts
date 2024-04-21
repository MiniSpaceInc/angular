export interface OrganizingUnit {
  id: number;
  parentId: number | null;
  parent: OrganizingUnit | null;
  isLeaf: boolean;
  name: string;
}
