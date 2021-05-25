export const dateFormatter = (date) => {
  const rowDate = new Date(date);
  const year = rowDate.getFullYear();
  const months = rowDate.getMonth() + 1;
  const dates = rowDate.getDate();
  return `${year} ${months} ${dates}`;
};
