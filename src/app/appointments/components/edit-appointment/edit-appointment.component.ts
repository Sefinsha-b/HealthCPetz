import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AddAppiontmentService } from '../../services/add-appiontment.service';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit{


  constructor(private Edit:AddAppiontmentService, private router:ActivatedRoute){}
  
  ngOnInit(): void {
    // this.fetchAppointment();
 
   
  }




  // fetchAppointment(){
  //   return this.Edit.getAppointmentData(['AppointmentID']).subscribe((resp)=>{
  //     return this.EditData=resp;
  //   })
  // }


}
