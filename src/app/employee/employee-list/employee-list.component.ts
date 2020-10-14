import { Component, OnInit } from '@angular/core';
import { Iemployee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  pageTitle: string = 'Employee List';
  employee: Iemployee[] = [];
  errorMessage: string;
  searchValue:string;
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

 
  constructor(private employeeService: EmployeeService) { }
  
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
 
  ngOnInit(): void {

    this.employeeService.getEmployee().subscribe({
      next: data => {
        this.employee = data;
      },
      error: err => this.errorMessage = err
    });
  }

}
