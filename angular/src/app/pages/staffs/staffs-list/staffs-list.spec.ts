import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffsList } from './staffs-list';

describe('StaffsList', () => {
  let component: StaffsList;
  let fixture: ComponentFixture<StaffsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
