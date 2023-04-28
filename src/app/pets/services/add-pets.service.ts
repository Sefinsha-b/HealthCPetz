import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddPetsService {

  constructor (private http: HttpClient) { }

  url: string = '  http://localhost:3000';


  PostPetsData(data:any){
    return this.http.post(this.url+"/Pets",data);
  }
  GetPetsData(){
    return this.http.get(this.url+"/Pets");
  }
}
