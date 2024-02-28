import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { DialogCommunicationServiceService } from '../../service/dialog-communication-service.service';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { MenuItem,MessageService } from 'primeng/api';

@Component({
  selector: 'app-register-modal',
  standalone: true,
  imports: [DialogModule,StepsModule,ToastModule],
  templateUrl: './register-modal.component.html',
  styleUrl: './register-modal.component.css',
  providers:[MessageService]
})
export class RegisterModalComponent {
  visible: boolean = false;
  modalName : string = 'register'
  items: MenuItem[] =[];
  activeIndex: number = 0;
  constructor(private dialogService: DialogCommunicationServiceService, private messageService: MessageService) {}
  onActiveIndexChange(event: number) {
    this.activeIndex = event;
}
  

  ngOnInit(): void {
    this.items = [
      {
          label: 'Personal',
          command: (event: any) => this.messageService.add({severity:'info', summary:'First Step', detail: event.item.label})
      },
      {
          label: 'Seat',
          command: (event: any) => this.messageService.add({severity:'info', summary:'Second Step', detail: event.item.label})
      },
      {
          label: 'Payment',
          command: (event: any) => this.messageService.add({severity:'info', summary:'Third Step', detail: event.item.label})
      },
      {
          label: 'Confirmation',
          command: (event: any) => this.messageService.add({severity:'info', summary:'Last Step', detail: event.item.label})
      }
  ];
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
