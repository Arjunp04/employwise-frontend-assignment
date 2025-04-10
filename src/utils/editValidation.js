export const validateEditForm = (user) => {
  const { first_name, last_name, email } = user;
  if (!first_name?.trim() || !last_name?.trim() || !email?.trim()) {
    return { valid: false, message: "All fields are required" };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, message: "Enter a valid email" };
  }
  return { valid: true };
};
