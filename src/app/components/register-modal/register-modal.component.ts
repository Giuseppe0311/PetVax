import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { DialogCommunicationServiceService } from '../../service/dialog-communication-service.service';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register-modal',
  standalone: true,
  imports: [
    DialogModule,
    InputTextModule,
    PasswordModule,
    InputNumberModule,
    ButtonModule,
    ToastModule,
  ],
  templateUrl: './register-modal.component.html',
  styleUrl: './register-modal.component.css',
  providers: [MessageService],
})
export class RegisterModalComponent {
  visible: boolean = false;
  modalName: string = 'register';
  loading = false;

  constructor(
    private dialogService: DialogCommunicationServiceService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.dialogService.showDialog$.subscribe((requestName: String) => {
      if (requestName === this.modalName) {
        this.visible = true;
        // Puedes agregar más lógica aquí según tus necesidades
      } else {
        this.visible = false;
      }
    });
  }
  load() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.show();
      this.showInfo();
    }, 3000);
  }

  show() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Registrado Correctamente',
    });
  }
  showInfo() {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Ya puedes iniciar Sesion' });
}
}
