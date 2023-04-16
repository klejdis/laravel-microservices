import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'ads-frontend-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ){

  }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'h-full');
    this.renderer.addClass(this.document.body, 'bg-gray-50');
  }

  ngOnDestroy(): void {
      this.renderer.removeClass(this.document.body, 'h-full');
      this.renderer.removeClass(this.document.body, 'bg-gray-50');
  }

}
