import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  constructor (private http: HttpClient) { }
url:string="http://localhost:3000";




GetDepartmentData(){
  return this.http.get(this.url+"/Departments")
}
postDepartmentData(data:any){
  return this.http.post(this.url+"/Departments",data)
}
}

