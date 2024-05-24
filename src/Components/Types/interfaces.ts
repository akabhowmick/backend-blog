export interface UserInfo {
  id?: number;
  user_id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  followers: string[];
  posts: string[];
}

export interface UserSignIn {
  email: string;
  password: string;
}

export interface ValidLogin {
  email: string;
  password: string;
  confirmPassword: string;
  match: boolean;
  charNumberValid: boolean;
  specialCharValid: boolean;
  uppercaseValid: boolean;
  numberValid: boolean;
}

export interface BlogPost {
  id: string; 
  title: string;
  subtitle: string;
  category: string;
  content: string[];
  date: number | Date;
}

