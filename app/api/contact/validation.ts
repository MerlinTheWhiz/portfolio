export type ContactFormData = {
  name: string;
  email: string;
  message: string;
  company?: string;
};

export type ValidationError =
  | "Invalid name"
  | "Invalid email address"
  | "Invalid message length"
  | "Spam detected"
  | null;

export function validateContactForm(
  data: ContactFormData
): ValidationError {
  const { name, email, message, company } = data;

  if (company && company.trim() !== "") return "Spam detected";

  if (!name || name.trim().length < 2 || name.trim().length > 50) {
    return "Invalid name";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return "Invalid email address";
  }

  if (!message || message.trim().length < 10 || message.length > 2000) {
    return "Invalid message length";
  }

  return null;
}