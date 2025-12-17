// Base types for the application
export type UserRole = 'admin' | 'staff' | 'resident';

export interface BaseUser {
  _id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export interface BaseApartment {
  _id: string;
  number: string;
  floor: number;
  status: 'available' | 'occupied' | 'maintenance';
  createdAt: Date;
}