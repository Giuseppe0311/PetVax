import { Component } from '@angular/core';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { RegisterModalComponent } from '../register-modal/register-modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginModalComponent,RegisterModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
