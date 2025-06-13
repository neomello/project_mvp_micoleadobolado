export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  lastLogin: string;
  createdAt: string;
  role: 'user' | 'admin';
  status: 'active' | 'inactive';
}

export interface Newsletter {
  id: string;
  email: string;
  status: 'active' | 'unsubscribed';
  subscribedAt: string;
  unsubscribedAt?: string;
}