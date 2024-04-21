import {OrganizingUnit} from "../../model/OrganizingUnit";

export const organizingUnitsMock: OrganizingUnit[] = [
  { id: 1, parentId: null, parent: null, isLeaf: false, name: 'Parent 1' },
  { id: 2, parentId: null, parent: null, isLeaf: false, name: 'Parent 2' },
  { id: 3, parentId: null, parent: null, isLeaf: false, name: 'Parent 3' },
  { id: 4, parentId: null, parent: null, isLeaf: false, name: 'Parent 4' },
  { id: 5, parentId: 1, parent: null, isLeaf: false, name: 'Child 1 of Parent 1' },
  { id: 6, parentId: 1, parent: null, isLeaf: true, name: 'Child 2 of Parent 1' },
  { id: 7, parentId: 5, parent: null, isLeaf: true, name: 'Grandchild 1 of Child 1' },
  { id: 8, parentId: 5, parent: null, isLeaf: true, name: 'Grandchild 2 of Child 1' },
  { id: 9, parentId: 2, parent: null, isLeaf: true, name: 'Child 1 of Parent 2' },
  { id: 10, parentId: 3, parent: null, isLeaf: true, name: 'Child 1 of Parent 3' },
  { id: 11, parentId: 4, parent: null, isLeaf: true, name: 'Child 1 of Parent 4' },
  { id: 12, parentId: null, parent: null, isLeaf: true, name: 'Parent 5' },
];

export const organizingUnitsMembershipMock: { userId: number, organizingUnitId: number}[] = [
  { userId: 1, organizingUnitId: 1 },
  { userId: 1, organizingUnitId: 2 },
  { userId: 1, organizingUnitId: 4 },
  { userId: 2, organizingUnitId: 1 },
  { userId: 2, organizingUnitId: 3 },
  { userId: 2, organizingUnitId: 6 },
  { userId: 2, organizingUnitId: 11 },
  { userId: 2, organizingUnitId: 12 },
  { userId: 2, organizingUnitId: 10 }
]
