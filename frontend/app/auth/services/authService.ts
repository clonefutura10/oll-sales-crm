import { User } from '@/lib/constants/auth';

// Mock user data
const mockUsers: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
];

// Mock credentials storage (in real app, this would be hashed passwords)
const mockCredentials: Record<string, string> = {
  'john@example.com': 'password123',
  'jane@example.com': 'password456',
};

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const login = async (email: string, password: string): Promise<User> => {
  await delay(1000); // Simulate network delay
  
  const storedPassword = mockCredentials[email];
  
  if (!storedPassword) {
    throw new Error('Invalid email or password');
  }
  
  if (storedPassword !== password) {
    throw new Error('Invalid email or password');
  }
  
  const user = mockUsers.find(u => u.email === email);
  
  if (!user) {
    throw new Error('User not found');
  }
  
  return user;
};

export const signup = async (
  name: string,
  email: string,
  password: string
): Promise<User> => {
  await delay(1200); // Simulate network delay
  
  // Check if user already exists
  const existingUser = mockUsers.find(u => u.email === email);
  if (existingUser) {
    throw new Error('User already exists with this email');
  }
  
  // Create new user
  const newUser: User = {
    id: Date.now().toString(),
    name,
    email,
  };
  
  // Add to mock data
  mockUsers.push(newUser);
  mockCredentials[email] = password;
  
  return newUser;
};