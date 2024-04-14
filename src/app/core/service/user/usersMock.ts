import {User} from "../../model/User";

const firstNames = ['John', 'Jane', 'Oliver', 'Emma', 'Noah', 'Ava', 'Liam', 'Sophia', 'Ethan', 'Isabella',
  'Michael', 'Emily', 'Jacob', 'Madison', 'Joshua', 'Amanda', 'Matthew', 'Sarah', 'Andrew', 'Stephanie'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez',
  'Wilson', 'Martinez', 'Anderson', 'Taylor', 'Thomas', 'Hernandez', 'Moore', 'Martin', 'Jackson', 'Thompson', 'White'];

export const usersMock: User[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  firstName: firstNames[i],
  lastName: lastNames[i],
  studentNumber: Math.floor(Math.random() * 900000) + 100000,
  usosId: 2000 + i,
  isOrganizer: Math.floor(Math.random() * 100000) % 2 === 0
}));
