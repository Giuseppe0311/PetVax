import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { DividerModule } from 'primeng/divider';
import { IdeaIconComponent } from '../../icons/idea-icon/idea-icon.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { DialogCommunicationServiceService } from '../../service/dialog-communication-service.service';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardModule,ButtonModule,ImageModule,DividerModule,IdeaIconComponent,NavbarComponent,ChipModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent  {

}
