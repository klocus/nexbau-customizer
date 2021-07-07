import { Component, Input, OnInit } from '@angular/core';

import { Item } from '../../../data/Item';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() items!: Item[];
  @Input('selected-item') selectedItem!: number;

  private params:any = [];

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.params = params;
    });
  }

  public onOptionClick(name: string, value: string) {
    this.router.navigate([], {queryParams: {[name]: value}, queryParamsHandling: 'merge'});
  }

  public isActiveOption(name: string, value: string): boolean {
    if (this.params[name] !== undefined) {
      return this.params[name] === value;
    } else {
      const field: number = this.items[this.selectedItem]['fields'].findIndex((x: any) => x.name === name);

      if (field > -1 && this.items[this.selectedItem]['fields'][field]['options'][0]['value'] === value) {
        return true;
      }
    }

    return false;
  }

}
