import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStaffs } from './add-staffs';

describe('AddStaffs', () => {
  let component: AddStaffs;
  let fixture: ComponentFixture<AddStaffs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddStaffs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStaffs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
