import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DateRangePipe } from '../shared/date-range.pipe';
import { EmployeedetaliComponent } from './employeedetali/employeedetali.component';

@NgModule({
  declarations: 
  [
    EmployeeListComponent,
    DateRangePipe,
    EmployeedetaliComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'employee', component: EmployeeListComponent },
      {
        path: 'employee/:id',
        component: EmployeedetaliComponent
      }
    ]),
    SharedModule
  ]
})
export class EmployeeModule { }
