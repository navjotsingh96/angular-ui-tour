import { RouterModule, Routes } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

let otherRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

export const routes: Routes = [
  {
    path: '',
    component: ToolbarComponent,
    children: otherRoutes,
  },
  {
    path: '**',
    component: ToolbarComponent,
    children: otherRoutes,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
