import { Component } from '@angular/core';
import { faArrowRight, faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ads-frontend-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent {
  faMagnifyingGlass = faMagnifyingGlass;
  faBars = faBars;
  faArrowRight = faArrowRight;

  mobileMenuShown = false;


  openMobileMenuSide(){
     this.mobileMenuShown = !this.mobileMenuShown
     
  }
}
