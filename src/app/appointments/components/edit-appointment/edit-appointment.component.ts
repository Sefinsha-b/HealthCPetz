import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AddAppiontmentService } from '../../services/add-appiontment.service';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit {
  AppOiDAta: any;


  constructor(private ConsPutAppointment: AddAppiontmentService, private router: ActivatedRoute) { }

  addAppointmentForm = new FormGroup({
    PetName: new FormControl(""),
    Department: new FormControl(""),
    VetName: new FormControl(""),
    MoreDetails: new FormControl("")
    
    
  })
  ngOnInit(): void {
   this.PutFetchAppointment(); 
  }
PutFetchAppointment(){
  return this.ConsPutAppointment.PutGetAppointmnetService(this.router.snapshot.params['id']).subscribe((resp:any)=>{
    this.  addAppointmentForm = new FormGroup({
      PetName: new FormControl(resp['PetName']),
      Department: new FormControl(resp['Department']),
      VetName: new FormControl(resp['VetName']),
      MoreDetails: new FormControl(resp['MoreDetails'])
    
      
    })
  })
}

UpdateFetch(){
  this.ConsPutAppointment.putAppointmentService(this.router.snapshot.params['id'], this.addAppointmentForm.value).subscribe((resp: any) => {
    console.log(resp);
    this.AppOiDAta=resp;
    alert("update successfully..!");
    // window.location.reload();
  })
}


}
