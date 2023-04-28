import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddVetService {
  

  constructor(private http: HttpClient) { }

  Url:string = 'http://localhost:3000';

  PostVetApi(data:any){
    return this.http.post(this.Url + '/Vets', data);
  }
  GetVetApi( ){
    return this.http.get(this.Url+'/Vets');
  }

// 
GetPutVet(id:any){
  return this.http.get(`${this.Url + '/Vets'}/${id}`);
}
PutVet(id:any,data:any){
  return this.http.put(`${this.Url + '/Vets'}/${id}`, data);

}
deleteData(id:any){
  return this.http.delete(this.Url + '/Vets/' + id);

}

}
