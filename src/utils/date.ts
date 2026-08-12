const formatMonthYear = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
  };

  return date.toLocaleDateString("en-US", options);
};

export const formatDateRange = (startDate: Date, endDate?: Date) => {
  const startFormatted = formatMonthYear(startDate);
  const endFormatted = endDate ? formatMonthYear(endDate) : "Present";

  return `${startFormatted} —  ${endFormatted}`;
};
