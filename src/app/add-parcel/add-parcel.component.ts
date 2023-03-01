import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Parcel } from '../interface';
import { ParcelsService } from '../services/parcel/parcels.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-parcel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-parcel.component.html',
  styleUrls: ['./add-parcel.component.css']
})
export class AddParcelComponent implements OnInit{
    @Input() editparcel: any;
  constructor( private fb: FormBuilder, private parcelService:ParcelsService,private router:Router) {
        
  }
  addParcelForm!:FormGroup
  ngOnInit(): void {
    this.addParcelForm= this.fb.group({
      name:[null, Validators.required],
      email:[null, Validators.required, Validators.email],
      Destination:[null, Validators.required],
      
    })
  }

  addParcels(){
    let parcel:Parcel= {...this.addParcelForm.value, id:Math.floor(Math.random() *10000)};
    this.parcelService.addParcels(parcel)
    this.router.navigate(['/'])
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['editparcel']) {
      const user = changes['editparcel'].currentValue;
      this.addParcelForm.patchValue({
        name: this.editparcel.name,
        email: this.editparcel.email,
        Destination: this.editparcel.Destination
      });
    }
  }

  // <button (click)="updateUser()">Update User</button>

}
