export interface ContactForm {
  name: string;
  email: string;
  message: string;
  company?: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateField(field: keyof ContactForm, value: string): string {
  switch (field) {
    case "name":
      if (!value.trim()) return "Name is required";
      if (value.trim().length < 2) return "Name must be at least 2 characters";
      if (value.trim().length > 50) return "Name must be under 50 characters";
      return "";
    case "email":
      if (!value.trim()) return "Email is required";
      if (!emailRegex.test(value)) return "Enter a valid email";
      return "";
    case "message":
      if (!value.trim()) return "Message is required";
      if (value.trim().length < 10) return "Message must be at least 10 characters";
      if (value.trim().length > 2000) return "Message must be under 2000 characters";
      return "";
    default:
      return "";
  }
}

export function validateForm(form: ContactForm): ContactFormErrors {
  return {
    name: validateField("name", form.name),
    email: validateField("email", form.email),
    message: validateField("message", form.message),
  };
}