// Generate a 6-digit verification code
export const generateVerificationCode = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Format phone number to E.164 format
export const formatPhoneNumber = (phoneNumber: string): string => {
  return phoneNumber.startsWith('+1') ? phoneNumber : `+1${phoneNumber.replace(/\D/g, '')}`;
};

// Check if verification code has expired
export const isCodeExpired = (expiryDate: string): boolean => {
  return new Date(expiryDate) < new Date();
};