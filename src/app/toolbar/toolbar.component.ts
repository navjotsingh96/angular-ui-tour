import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ToolbarContentComponent } from '../toolbar-content/toolbar-content.component';
import { SidebarContentComponent } from '../sidebar-content/sidebar-content.component';
import { RouterOutlet } from '@angular/router';
import { GuideTourService } from '../services/guide-tour.service';
import { TourAnchorMatMenuDirective } from 'ngx-ui-tour-md-menu';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  providers: [GuideTourService],
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    ToolbarContentComponent,
    SidebarContentComponent,
    RouterOutlet,
    TourAnchorMatMenuDirective,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  showFiller = false;
  constructor(private service: GuideTourService) {}

  startTour() {
    this.service.basicTour();
  }
}
