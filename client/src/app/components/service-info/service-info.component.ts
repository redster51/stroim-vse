import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-service-info',
  templateUrl: './service-info.component.html',
  styleUrls: ['./service-info.component.scss'],
})
export class ServiceInfoComponent implements OnInit {

  @Input() service;
  header;

  get someService() {
    return this.service;
  }
  constructor() { }

  ngOnInit(): void {
    this.header = `url(../../../assets/images/${this.service.photo}) no-repeat center center`;
    console.log(this.service);
  }

}
