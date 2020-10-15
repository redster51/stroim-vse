import { Component, OnInit } from '@angular/core';
import { SERVICES } from '../../../assets/constants';

@Component({
  selector: 'app-installation-of-closed-terraces',
  templateUrl: './installation-of-closed-terraces.component.html',
  styleUrls: ['./installation-of-closed-terraces.component.scss']
})
export class InstallationOfClosedTerracesComponent implements OnInit {
  service = SERVICES.installationOfClosedTerraces;

  constructor() { }

  ngOnInit(): void {
  }

}
