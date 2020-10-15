import { Component, OnInit } from '@angular/core';
import {SERVICES} from '../../../assets/constants';

@Component({
  selector: 'app-installation-of-verandas',
  templateUrl: './installation-of-verandas.component.html',
  styleUrls: ['./installation-of-verandas.component.scss']
})
export class InstallationOfVerandasComponent implements OnInit {
  service = SERVICES.installationOfVerandas;
  constructor() { }

  ngOnInit(): void {
  }

}
