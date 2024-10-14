import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularDatepickerComponent } from './angular-datepicker.component';

describe('AngularDatepickerComponent', () => {
  let component: AngularDatepickerComponent;
  let fixture: ComponentFixture<AngularDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularDatepickerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
