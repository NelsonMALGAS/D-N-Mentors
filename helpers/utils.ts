const now = new Date();


/**
 * Checks if the provided due date is within the next 24 hours.
 *
 * @param {Object} [dueDate] - An optional object containing the `seconds` property, which represents the due date in Unix timestamp format (seconds since the epoch).
 * @param {number} dueDate.seconds - The Unix timestamp representing the due date in seconds.
 * @returns {boolean} - Returns `true` if the due date is within the next 24 hours, otherwise `false`.
 */
export const isDueSoon = (dueDate?: { seconds: number }) => {
  if (!dueDate) return false;

  const dueDateObj = new Date(dueDate.seconds * 1000);
  const timeDiff = dueDateObj.getTime() - now.getTime();
  const hoursDiff = timeDiff / (1000 * 60 * 60);
  
  return hoursDiff <= 24;
};



/**
 * Validates whether the given string is in a valid email format.
 *
 * @param {string} email - The email address to validate.
 * @returns {boolean} - Returns `true` if the email format is valid, otherwise `false`.
 */
export const validateEmail = (email: string): boolean => {
  // Regular expression to validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

