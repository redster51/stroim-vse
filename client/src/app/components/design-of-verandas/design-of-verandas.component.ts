import {Component, OnInit} from '@angular/core';
import {SERVICES} from '../../../assets/constants';

@Component({
  selector: 'app-design-of-verandas',
  templateUrl: './design-of-verandas.component.html',
  styleUrls: ['./design-of-verandas.component.scss']
})
export class DesignOfVerandasComponent implements OnInit {
  service = SERVICES.designOfVerandas;
  constructor() {
  }

  ngOnInit(): void {
  }

}
