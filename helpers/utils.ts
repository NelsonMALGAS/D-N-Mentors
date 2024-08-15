const now = new Date();

export const isDueSoon = (dueDate?: { seconds: number }) => {
  if (!dueDate) return false;
  
  // Convert dueDate to a Date object
  const dueDateObj = new Date(dueDate.seconds * 1000);
  
  // Calculate the time difference in milliseconds
  const timeDiff = dueDateObj.getTime() - now.getTime();
  
  // Convert time difference to hours
  const hoursDiff = timeDiff / (1000 * 60 * 60);
  
  return hoursDiff <= 24;
};
