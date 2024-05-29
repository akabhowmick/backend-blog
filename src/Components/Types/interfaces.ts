export interface UserInfo {
  id?: number;
  user_id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  aboutMe: string;
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

export type Post = {
  author: string;
  title: string;
  ups: number;
  url: string;
  permalink: string;
  selfText: string;
  num_comments: number;
  thumbnail?: string;
  created_utc: number;
  name: string;
  likes?: boolean;
  saved?: boolean;
  token?: string;
};

export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  content: string[];
  date: number | Date;
}

export interface MembershipPricing {
  name: string;
  price: number;
  perks: string[];
}
