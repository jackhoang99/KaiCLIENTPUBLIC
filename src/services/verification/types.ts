export interface VerificationResult {
  success: boolean;
  message: string;
}

export interface VerificationData {
  verification_code: string | null;
  verification_code_expires_at: string | null;
}