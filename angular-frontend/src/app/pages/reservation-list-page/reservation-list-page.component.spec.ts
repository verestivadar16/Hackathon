import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationListPageComponent } from './reservation-list-page.component';

describe('ReservationListPageComponent', () => {
  let component: ReservationListPageComponent;
  let fixture: ComponentFixture<ReservationListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservationListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
