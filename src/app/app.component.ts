import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TourMatMenuModule } from 'ngx-ui-tour-md-menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TourMatMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'guide-tour';
}
