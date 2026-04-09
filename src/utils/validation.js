const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function getEmailError(value) {
  if (!value) return "";
  if (!EMAIL_REGEX.test(value)) return "Invalid email";
  return "";
}

export function getPasswordError(value) {
  if (!value) return "";
  if (value.length < 8) return "Password must be at least 8 characters";
  return "";
}

export function getUsernameError(value) {
  if (!value) return "";
  if (value.trim().length < 2) return "Username must be at least 2 characters";
  return "";
}
