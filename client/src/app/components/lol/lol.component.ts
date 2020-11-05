import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lol',
  templateUrl: './lol.component.html',
  styleUrls: ['./lol.component.scss']
})
export class LolComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    window.location.href = 'http://img1.liveinternet.ru/images/foto/b/2/111/1823111/f_10770684.jpg';
  }
}
