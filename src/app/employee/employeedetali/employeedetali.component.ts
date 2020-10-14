import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iemployee } from '../employee';

@Component({
  selector: 'app-employeedetali',
  templateUrl: './employeedetali.component.html',
  styleUrls: ['./employeedetali.component.css']
})
export class EmployeedetaliComponent implements OnInit {

  pageTitle: string = 'Employee Detail';
  emp: Iemployee;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.emp = {
      'employeeID': id,
      'employeeName': '',
      'employeecode': 'GDN-0011',
      'JoingDate': "March 19, 2019",
      'department': 'Leaf Rake',
      'salary': 233312,
      'starRating': 3.2,
      'imageUrl': 'assets/images/leaf_rake.png'
    };
  }

  onBack(): void {
    this.router.navigate(['/employee']);
  }

}
