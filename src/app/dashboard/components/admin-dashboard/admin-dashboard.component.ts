import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  totalVets: any;
  totalPets: any;
  totalAppointment: any
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTotalAppointment();
    this.getVets();
    this.getPets();
  }

  getTotalAppointment() {
    this.http.get('http://localhost:3000/Appointments').subscribe((resp) => {
      this.totalAppointment = resp
      console.log(resp)
    })

  }
  getVets() {
    this.http.get('http://localhost:3000/Vets').subscribe((resp) => {
      this.totalVets = resp
      console.log(resp)
    })

  }
  getPets() {
    this.http.get('http://localhost:3000/Pets').subscribe((resp) => {
      this.totalPets = resp
      console.log(resp)
    })

  }
}
