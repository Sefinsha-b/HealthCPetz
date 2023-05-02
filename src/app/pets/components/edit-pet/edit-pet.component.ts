import { Component, OnInit } from '@angular/core';
import { AddPetsService } from '../../services/add-pets.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit{
  PetsoiDAta: any;

constructor(private ConsEditPet:AddPetsService, private router: ActivatedRoute){}
EditPetsForm = new FormGroup({
  FirstName: new FormControl(""),
  Age: new FormControl(""),
  OwnerEmail: new FormControl(""),
  Gender: new FormControl("")
})
ngOnInit(): void {
  this.Getputfetch(); 
 }

Getputfetch(){
  return this.ConsEditPet.PutGetPetApService(this.router.snapshot.params['id']).subscribe((resp:any)=>{
this.EditPetsForm = new FormGroup({
  FirstName: new FormControl(resp['FirstName']),
  Age: new FormControl(resp['Age']),
  OwnerEmail: new FormControl(resp['OwnerEmail']),
  Gender: new FormControl(resp['Gender'])
})
  })}

  UpdatePet(){
    return this.ConsEditPet.PutPetsApiService(this.router.snapshot.params['id'], this.EditPetsForm.value).subscribe((resp: any) => {
      
      console.log(resp);
      this.PetsoiDAta=resp;
      alert("update successfully..!");
  })}
}
