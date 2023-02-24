import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Parcel } from '../interface';
import { ParcelsService } from '../services/parcel/parcels.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-parcels',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parcels.component.html',
  styleUrls: ['./parcels.component.css']
})
export class ParcelsComponent  implements OnInit{
  parcels:Parcel[]=[]

  constructor(private parcelService:ParcelsService, private router:Router, 
    private route:ActivatedRoute){}

    ngOnInit(): void {
      this.parcels= this.parcelService.getParcels()
       console.log('====================================');
       console.log(this.parcels);
       console.log('====================================');  
    }
}
