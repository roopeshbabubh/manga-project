import { Component } from '@angular/core';

@Component({
  selector: 'app-header-tag',
  templateUrl: './header-tag.component.html',
  styleUrl: './header-tag.component.css'
})
export class HeaderTagComponent {
  selectedSidebarItem: string = 'Item1';
}
