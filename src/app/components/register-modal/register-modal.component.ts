import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { DialogCommunicationServiceService } from '../../service/dialog-communication-service.service';

@Component({
  selector: 'app-register-modal',
  standalone: true,
  imports: [DialogModule],
  templateUrl: './register-modal.component.html',
  styleUrl: './register-modal.component.css'
})
export class RegisterModalComponent {
  visible: boolean = false;
  modalName : string = 'register'

  constructor(private dialogService: DialogCommunicationServiceService) {}

  ngOnInit(): void {
    this.dialogService.showDialog$.subscribe((requestName:String) => {
     if (requestName === this.modalName) {
       this.visible = true;
       // Puedes agregar más lógica aquí según tus necesidades
     }else{
        this.visible = false;
     }
    });
  }
}
