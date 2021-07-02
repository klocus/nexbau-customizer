import { Component, Input, OnInit } from '@angular/core';

import { Item } from '../../../data/Item';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() items!: Item[];
  @Input() selected!: number;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  public onOptionClick(name: string, value: string) {
    this.router.navigate([], {queryParams: {[name]: value}, queryParamsHandling: 'merge'});
  }

}
