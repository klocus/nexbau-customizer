import { Component, OnInit } from '@angular/core';

import { DoorService } from '../../door.service';
import { Door } from '../../database/door';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  doors: Door[] = [];

  constructor(private doorService: DoorService) { }

  ngOnInit(): void {
    this.getDoors();
  }

  getDoors(): void {
    this.doorService.getDoors()
      .subscribe(doors => this.doors = doors);
  }

}
