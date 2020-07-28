import {Component, OnDestroy, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('gradientedHeader', [
      state('transparent', style({background: 'transparent'})),
      state('gradiented', style({background: 'rgba(108, 184, 112, 0.96)'})),
      transition('transparent <=> gradiented', animate('0.2s'))
    ])
  ]
})
export class HeaderComponent implements OnInit, OnDestroy {
  isScrolled: boolean = false;
  state: string = 'transparent';

  constructor() {
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollEvent, true);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollEvent, true);
  }

  scrollEvent = (event): void => {
    const scrollPosition = event.target.scrollingElement.scrollTop;
    this.isScrolled = scrollPosition > 100;
    this.state = this.isScrolled ? 'gradiented' : 'transparent';
  };
}
