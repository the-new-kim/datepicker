import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CalendarModule } from '@kims-libs/angular-datepicker';
import { CalendarBasicComponent } from './calendar-basic/calendar-basic.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CalendarBasicComponent],
  providers: [CalendarModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
