import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-add-departments',
  templateUrl: './add-departments.component.html',
  styleUrls: ['./add-departments.component.css']
})
export class AddDepartmentsComponent implements OnInit {
  getDepartment: any;

  constructor(private AddDepartment:DepartmentService) { }

  ngOnInit(): void {
    this.fetchDepartment();
  }
fetchDepartment(){
  return this.AddDepartment.GetDepartmentData().subscribe((resp:any)=>{
    this.getDepartment=resp;
  })
}
postDepartmentFormData(data :any) {
  console.warn(data);
  this.AddDepartment.postDepartmentData(data).subscribe((result)=>{
  
  })
}
}
 