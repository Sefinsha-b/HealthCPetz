import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//There will one service per component. But other components can also use the
//service allocated for another component via there distributers
//This layer interacts with the repository layer and has business logic
@Injectable({
  providedIn: 'root'
})
export class AddAppiontmentService {

  // Inject Repository in the constructor
  constructor (private http: HttpClient) { }

  url: string = "http://localhost:3000";
  
  GetAppointmentData(){
    return this.http.get(this.url+"/Appointments");
  }

  PostAppointmentData(data:any){
    return this.http.post(this.url+"/Appointments",data);
  }


  
}



