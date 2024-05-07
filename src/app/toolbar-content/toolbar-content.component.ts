import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-toolbar-content',
  standalone: true,
  imports: [MatIconModule, MatToolbarModule],
  templateUrl: './toolbar-content.component.html',
  styleUrl: './toolbar-content.component.scss',
})
export class ToolbarContentComponent {}
