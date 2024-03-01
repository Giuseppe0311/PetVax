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
  mostrarDropdownavatar : boolean = false;
  toggleDropdown() {
    this.mostrarDropdownavatar = false
    this.mostrarDropdown = !this.mostrarDropdown;
    // mostrar por 5 segundos
    setTimeout(() => {
      this.mostrarDropdown = false;
    }, 8000);
  }
  toggleDropdownavatar() {
    this.mostrarDropdown = false
    this.mostrarDropdownavatar = !this.mostrarDropdownavatar;
    // mostrar por 5 segundos
    setTimeout(() => {
      this.mostrarDropdownavatar = false;
    }, 8000);
  }
}
