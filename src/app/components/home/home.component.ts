import { Component } from '@angular/core';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { RegisterModalComponent } from '../register-modal/register-modal.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DialogCommunicationServiceService } from '../../service/dialog-communication-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginModalComponent,RegisterModalComponent,ButtonModule,DialogModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private dialogService: DialogCommunicationServiceService) {}

  showDialog(modalName: string) {
    this.dialogService.showDialog(modalName);
  }
}
