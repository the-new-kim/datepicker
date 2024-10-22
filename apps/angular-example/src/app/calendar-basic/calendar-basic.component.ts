import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CalendarService } from '@kims-libs/angular-datepicker';
import { DateUnit, isDateEqual } from '@kims-libs/datepicker-core';

@Component({
  selector: 'app-calendar-basic',
  templateUrl: './calendar-basic.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class CalendarBasicComponent {
  @Input() selectedDate?: Date;
  constructor(public calendar: CalendarService) {}

  onMonthChange(event: Event) {
    const { value } = event.target as HTMLSelectElement;
    if (Number.isNaN(value)) {
      throw new Error('Select value is not a number');
    }
    this.calendar.setMonth(Number(value));
  }

  isDateEqual(dateUnit: DateUnit, date1: Date, date2: Date | undefined) {
    return isDateEqual(dateUnit, date1, date2);
  }
}
