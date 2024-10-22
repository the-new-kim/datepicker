import { Injectable } from '@angular/core';
import { generateCalendarGrid } from '@kims-libs/datepicker-core';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  date = new Date();
  grid: Date[][] = [];

  constructor() {
    this.updateCalendarGrid();
  }

  updateCalendarGrid() {
    this.grid = generateCalendarGrid(this.date);
  }

  setMonth(month: number) {
    this.date = new Date(this.date.getFullYear(), month, 1);
    this.updateCalendarGrid();
  }

  prevMonth() {
    this.setMonth(this.date.getMonth() - 1);
  }

  nextMonth() {
    this.setMonth(this.date.getMonth() + 1);
  }

  setYear(year: number) {
    this.date = new Date(year, this.date.getMonth(), 1);
    this.updateCalendarGrid();
  }
}
