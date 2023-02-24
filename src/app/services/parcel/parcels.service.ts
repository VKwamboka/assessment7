import { Injectable } from '@angular/core';
import { Parcel } from 'src/app/interface';


@Injectable({
  providedIn: 'root'
})
export class ParcelsService {
  private parcels:Parcel[ ]=[
    {
    id:1,
    name:"Study",
    email:"verah@gmail.com",
    Destination:"Nairobi"
   
  }
  ]

  constructor() { }

  addParcels(parcels:Parcel):void{
    this.parcels.push(parcels)
      }

  getParcels():Parcel[]{
    return this.parcels
  }

  getOneParcel(id:number):Parcel{
    return this.parcels.find(x=>x.id===id) as Parcel;
  }

}
