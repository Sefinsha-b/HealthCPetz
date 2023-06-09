import { Component } from '@angular/core';
import { AddPetsService } from '../../services/add-pets.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addpets',
  templateUrl: './addpets.component.html',
  styleUrls: ['./addpets.component.css']
})
export class AddpetsComponent {
  PetsDAta: any;
  constructor(private Conspet: AddPetsService) { }

  get add() {
    return this.addPetsForm.controls;
  }
  addPetsForm = new FormGroup({
    FirstName: new FormControl(""),
    Age: new FormControl(""),
    OwnerEmail: new FormControl(""),
    Gender: new FormControl("")
  })
  ngOnInit(): void {

    // Fetch / Load data
    // Validation Logic
    this.fetchpetsData();
  }
  postPetsFormData() {

    return this.Conspet.PostPetsApi(this.addPetsForm.value).subscribe((resp: any) => {

      console.log(resp);
      alert("sucessfully Added");
    })


  }
  fetchpetsData() {
     this.Conspet.GetPetsApi().subscribe((resp: any) => {
      this.PetsDAta = resp;
      console.log(resp);
    })
  }
}
