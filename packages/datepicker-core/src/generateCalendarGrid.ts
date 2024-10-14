export function generateCalendarGrid(
  date: Date | { year: number; month: number } = new Date(),
  weekStart = 0
): Date[][] {
  const calendarGrid: Date[][] = [];
  let week: Date[] = [];

  const year = date instanceof Date ? date.getFullYear() : date.year;
  const month = date instanceof Date ? date.getMonth() : date.month;
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  //init weekStart
  weekStart = weekStart % 7;

  const startOffset = (firstDayOfMonth.getDay() - weekStart + 7) % 7;

  // padding days before first day of month
  for (let i = 0; i < startOffset; i++) {
    const date = new Date(year, month, 1 - startOffset + i);
    week.push(date);
  }

  // fill days in month
  for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
    const date = new Date(year, month, day);
    week.push(date);
    if (week.length === 7) {
      calendarGrid.push(week);
      week = [];
    }
  }

  // padding days after last day of month
  if (week.length > 0) {
    const endOffset = 7 - week.length;
    for (let i = 1; i <= endOffset; i++) {
      const date = new Date(year, month + 1, i);
      week.push(date);
    }
    calendarGrid.push(week);
  }

  return calendarGrid;
}
