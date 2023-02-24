import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from '../services/auth/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public loginService:LoginService){}
}
