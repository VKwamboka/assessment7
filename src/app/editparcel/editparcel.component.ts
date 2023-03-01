import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Parcel } from '../interface';
import { ActivatedRoute } from '@angular/router';
import { ParcelsService } from '../services/parcel/parcels.service';

@Component({
  selector: 'app-editparcel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './editparcel.component.html',
  styleUrls: ['./editparcel.component.css']
})
export class EditparcelComponent {
// parcel:Parcel
constructor(   private route: ActivatedRoute, private parcelService:ParcelsService){}

ngOnInit(): void {
 let parcel:Parcel
  // const id = +this.route.snapshot.paramMap.get(id);
  // this.parcelService.getOneParcel(parcel.id);
}
}
