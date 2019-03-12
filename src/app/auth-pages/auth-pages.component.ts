import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-pages',
  templateUrl: './auth-pages.component.html',
  styleUrls: ['./auth-pages.component.scss']
})
export class AuthPagesComponent implements OnInit {

  isClosedSidebar: boolean

  constructor() { 
    this.isClosedSidebar = true
  }

  ngOnInit() {
  }

  showOrHideSidebar(isClosed: boolean) {
    this.isClosedSidebar = isClosed
    console.log(this.isClosedSidebar)
  }

}
