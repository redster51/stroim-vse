import { Component, OnInit } from '@angular/core';
import { SERVICES } from '../../../assets/constants';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  get services() {
    return SERVICES;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
