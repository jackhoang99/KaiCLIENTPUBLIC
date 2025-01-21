export interface AuthFormData {
  email: string;
  password: string;
}

export interface AuthResult {
  user: any | null;
  error: string | null;
}