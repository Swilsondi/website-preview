// Input validation utilities
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateName = (name) => {
  return name.trim().length >= 2 && name.trim().length <= 50;
};

export const sanitizeInput = (input) => {
  return input.trim().replace(/<[^>]*>?/gm, ""); // Remove HTML tags
};

export const validateForm = (formData) => {
  const errors = {};

  if (!validateName(formData.firstName)) {
    errors.firstName = "First name must be 2-50 characters";
  }

  if (!validateName(formData.lastName)) {
    errors.lastName = "Last name must be 2-50 characters";
  }

  if (!validateEmail(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!formData.projectType) {
    errors.projectType = "Please select a project type";
  }

  if (!formData.budget) {
    errors.budget = "Please select a budget range";
  }

  if (formData.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
