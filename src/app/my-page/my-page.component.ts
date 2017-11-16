import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MyPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
