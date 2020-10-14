import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedetaliComponent } from './employeedetali.component';

describe('EmployeedetaliComponent', () => {
  let component: EmployeedetaliComponent;
  let fixture: ComponentFixture<EmployeedetaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeedetaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeedetaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
