/** Contact-form validation rules for the portfolio landing pop-up. */

export type ContactPayload = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export type ContactErrors = Partial<Record<keyof ContactPayload, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Collapse control characters / newlines so values stay on one line. */
const oneLine = (s: string) => s.replace(/[\u0000-\u001f\u007f]+/g, " ").replace(/\s+/g, " ").trim();

/** Optional project name attached when the form is opened from a project card. */
export const cleanTopic = (v: unknown): string => (typeof v === "string" ? oneLine(v).slice(0, 100) : "");

export function validateContact(input: Partial<Record<keyof ContactPayload, unknown>>): {
  ok: boolean;
  errors: ContactErrors;
  clean: ContactPayload;
} {
  const str = (v: unknown) => (typeof v === "string" ? v : "");
  const clean: ContactPayload = {
    name: oneLine(str(input.name)),
    phone: oneLine(str(input.phone)),
    email: oneLine(str(input.email)),
    message: str(input.message).replace(/\r\n/g, "\n").trim(),
  };
  const errors: ContactErrors = {};

  if (!clean.name) errors.name = "Please enter your name.";
  else if (clean.name.length < 2) errors.name = "Name is too short.";
  else if (clean.name.length > 80) errors.name = "Name is too long.";

  const digits = clean.phone.replace(/\D/g, "");
  if (!clean.phone) errors.phone = "Please enter your phone number.";
  else if (!/^[+\d\s\-().]+$/.test(clean.phone) || digits.length < 7 || digits.length > 15)
    errors.phone = "Enter a valid phone number (7–15 digits).";

  if (!clean.email) errors.email = "Please enter your email address.";
  else if (clean.email.length > 120 || !EMAIL_RE.test(clean.email)) errors.email = "Enter a valid email address.";

  if (!clean.message) errors.message = "Please write a short message.";
  else if (clean.message.length < 10) errors.message = "Please add a little more detail (at least 10 characters).";
  else if (clean.message.length > 2000) errors.message = "Message is too long (2000 characters max).";

  return { ok: Object.keys(errors).length === 0, errors, clean };
}
