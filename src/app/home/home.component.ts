import { Component } from '@angular/core';
import { TourAnchorMatMenuDirective } from 'ngx-ui-tour-md-menu';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TourAnchorMatMenuDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
