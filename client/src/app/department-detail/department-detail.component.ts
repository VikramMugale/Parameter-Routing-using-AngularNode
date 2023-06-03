import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MarvellousService } from '../marvellous.service';

@Component({
  selector: 'app-department-detail',
  template: `
    <h2>Thank for selecting the department</h2>
    <table>
      <tr>
        <th>Name</th>
        <th>Salary</th>
        <th>Age</th>
      </tr>
      <tr *ngFor="let value of details[departmentId-1]">
        <td>{{value.name}}</td>
        <td>{{value.salary}}</td>
        <td>{{value.age}}</td>
     <tr>
    </table>  
    <router-outlet></router-outlet>
    
    <div>
      <button (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public details : any;
  public departmentId : any;
  constructor(private route: ActivatedRoute, private router: Router, public obj : MarvellousService) { }

  ngOnInit()
  {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')!);
      this.departmentId = id;     
    });
    return this.obj.GetDetails().subscribe(data=>{this.details=data})
  }

  gotoDepartments() 
  {
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route });
  }
}
