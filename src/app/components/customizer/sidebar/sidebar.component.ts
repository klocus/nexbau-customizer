import { Component, OnInit } from '@angular/core';

import { DoorService } from '../../../door.service';
import { Door } from '../../../database/door';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public doors: Door[] = [];
  public door!: Door;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private doorService: DoorService) {
  }

  ngOnInit(): void {
    this.getDoors();
  }

  private getDoors(): void {
    this.doorService.getDoors()
      .subscribe((doors) => {
        this.doors = doors;
        this.getSpecificDoor();
      });
  }

  private getSpecificDoor(): void {
    this.route.params.subscribe(params => {
      let index: number = this.doors.findIndex(x => x.id == params.id);
      if (index > -1) {
        this.door = this.doors[index];
        console.log('Door #' + params.id, this.door);
      } else {
        this.router.navigate(['/not-found']);
      }
    });
  }

}
