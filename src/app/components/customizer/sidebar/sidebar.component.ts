import { Component, Input, OnInit } from '@angular/core';

import { Item } from '../../../data/Item.interface';
import { ActivatedRoute, Router } from "@angular/router";
import { Field } from '../../../data/Field.interface';
import { Option } from '../../../data/Option.interface';
import { Condition } from '../../../data/Condition.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() items!: Item[];
  @Input('selected-item') selectedItem!: Item;

  private params: any = [];

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

  public canDisplay(field: Field): boolean {
    if (field?.condition) {
      const condition: Condition = field.condition;
      const conditionField: Field | undefined = this.selectedItem.fields.find(x => x.name == condition.field);

      return conditionField?.options[conditionField.selected].value === condition.value;
    }

    return true;
  }

  public getOptionIcon(field: Field, option: Option): string {
    let image: string;
    if (option['value']) {
      image = './assets/img/items/';
      image += this.selectedItem.name + '/icons/' + field.name + '-';
      image += option['value'] + '.png';
    } else {
      image = './assets/img/none.png';
    }

    return image;
  }

}
