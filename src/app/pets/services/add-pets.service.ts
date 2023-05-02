import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddPetsService {

  constructor (private http: HttpClient) { }

  url: string =  'http://localhost:3000';


  PostPetsApi(data:any){
    return this.http.post(this.url+"/Pets",data);
  }
  GetPetsApi(){
    return this.http.get<any>(this.url+"/Pets");

  }

  //Put
  PutGetPetApService(id:any){
  return this.http.get(`${this.url + '/Pets'}/${id}`)
  }
  PutPetsApiService(id:any,data:any){
    return this.http.put(`${this.url + '/Pets'}/${id}`, data)
  }
  DeletePetService(id:any){
    return this.http.delete(this.url + '/Pets/' + id)
  }
  }

