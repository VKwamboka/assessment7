import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './services/guards/authguard.guard';

const routes: Routes = [
  { path: 'login', loadComponent: () => import('./login/login.component').then(l => l.LoginComponent) },
  { path: '', loadComponent: () => import('./parcels/parcels.component').then(p => p.ParcelsComponent), canActivate: [AuthguardGuard]},
  { path: 'addparcel', loadComponent: () => import('./add-parcel/add-parcel.component').then(d => d.AddParcelComponent),canActivate: [AuthguardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
