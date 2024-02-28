import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { DialogCommunicationServiceService } from '../../service/dialog-communication-service.service';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';


@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [DialogModule,InputTextModule,ButtonModule,PasswordModule],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css',
})
export class LoginModalComponent {
  visible: boolean = false;
  modalName: string = 'login';
  loading: boolean = false;
  constructor(private dialogService: DialogCommunicationServiceService) {}
 

  ngOnInit(): void {
    this.dialogService.showDialog$.subscribe((requestedModal: string) => {
      if (requestedModal === this.modalName) {
        this.visible = true;
        // Puedes agregar más lógica aquí según tus necesidades
      } else {
        this.visible = false;
      }
    });
  }
  load(){
    this.loading = true;

    setTimeout(() => {
        this.loading = false
    }, 2000);
  }
}
