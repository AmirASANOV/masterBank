const now = new Date(Date.now());

export const currentYear = now.getFullYear();
const currentMonth = now.getMonth();
const currentDay = now.getDate();

export const MAX_DATE = new Date(
  Date.UTC(currentYear - 18, currentMonth, currentDay - 1),
);

export const MIN_DATE = new Date(
  Date.UTC(currentYear - 100, currentMonth, currentDay - 1),
);
