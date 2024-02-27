import { Component } from '@angular/core';

@Component({
  selector: 'app-register-modal',
  standalone: true,
  imports: [],
  templateUrl: './register-modal.component.html',
  styleUrl: './register-modal.component.css'
})
export class RegisterModalComponent {
  registrar(){
    alert('Estamos trabajando en ello, gracias por tu paciencia.')
  }
}
