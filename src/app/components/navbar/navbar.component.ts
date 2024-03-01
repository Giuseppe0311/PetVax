import { Component, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AvatarModule, BadgeModule, MessagesModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  mostrarDropdown: boolean = false;
  toggleDropdown() {
    this.mostrarDropdown = !this.mostrarDropdown;
    // mostrar por 5 segundos
    setTimeout(() => {
      this.mostrarDropdown = false;
    }, 8000);
  }
}
