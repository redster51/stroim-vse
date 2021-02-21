import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SERVICES} from '../../shared/constants';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-selected-service',
  templateUrl: './selected-service.component.html',
  styleUrls: ['./selected-service.component.scss']
})
export class SelectedServiceComponent implements OnInit {
  selectedServiceName: string;
  selectedService;
  header: string;
  sip = 'Строим SIP';
  serviceDescription: SafeHtml;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.selectedServiceName = this.route.snapshot.params['selected'];
    this.selectedService = SERVICES[this.selectedServiceName];
    this.checkService();
  }
  private checkService(): void {
    if (!this.selectedService) {
      this.router.navigateByUrl('error').then();
    }
    else {
      this.setTitle();
      this.header = `url(../../../assets/images/${this.selectedService.photo}) no-repeat center center`;
      this.serviceDescription = this.sanitizer.bypassSecurityTrustHtml(this.selectedService.description);
    }
  }
  private setTitle(): void {
    document.title = `${this.selectedService.name} | ${this.sip}`;
  }
}
