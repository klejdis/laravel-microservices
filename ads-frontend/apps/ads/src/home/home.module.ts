import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export const ROUTES: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ],
  },
];

@NgModule({
  declarations: [DefaultLayoutComponent, HomeComponent],
  imports: [
    CommonModule, 
    RouterModule.forRoot(ROUTES),
    FontAwesomeModule
  ],
})
export class HomeModule {
}
