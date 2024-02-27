import { Component } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css'
})
export class LoginModalComponent {
  constructor() {}

  login(){
    alert('Estamos trabajando en ello, por favor intente más tarde.');
  }

}
