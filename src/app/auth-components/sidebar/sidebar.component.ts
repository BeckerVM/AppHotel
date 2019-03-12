import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isClosedSidebar: boolean

  constructor() { 
    this.isClosedSidebar = true
  }

  ngOnInit() {
  }

  @Output() closed = new EventEmitter<boolean>()

  showOrHideSidebar() {
    this.isClosedSidebar = !this.isClosedSidebar
    this.closed.emit(this.isClosedSidebar)
  }
}
