import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDetailedPageComponent } from './room-detailed-page.component';

describe('RoomDetailedPageComponent', () => {
  let component: RoomDetailedPageComponent;
  let fixture: ComponentFixture<RoomDetailedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomDetailedPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomDetailedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
