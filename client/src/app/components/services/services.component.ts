import {Component, OnInit} from '@angular/core';
import {SERVICES} from '../../shared/constants';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  serviceNames = Object.keys(this.services);

  get services() {
    return SERVICES;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
