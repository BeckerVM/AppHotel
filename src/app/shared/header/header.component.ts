import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isVisibleSuboption : boolean
  isVibleMenuResponsive : boolean

  constructor() { 
    this.isVisibleSuboption = false
    this.isVibleMenuResponsive = false
  }

  ngOnInit() {
  }

  showOrHideSuboption() {
    this.isVisibleSuboption = !this.isVisibleSuboption
    return false
  }

  showOrHideMenuResponsive() {
    console.log(this.isVibleMenuResponsive)
    this.isVibleMenuResponsive = !this.isVibleMenuResponsive
    return false
  }

}
