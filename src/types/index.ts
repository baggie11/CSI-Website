// types/index.ts
export interface Member {
  id: number;
  name: string;
  role: string;
  dept?: string;    // Optional property
  year?: string;    // Optional property  
  image?: string;   // Optional property
}

export interface Team {
  id: number;
  name: string;
  members: Member[];
}

export interface Events {
  id: number;
  title: string;
  date: string;
  description: string;
  location: string;
  image?: string;
}