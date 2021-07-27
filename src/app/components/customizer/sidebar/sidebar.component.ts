import { Component, Input, OnInit } from '@angular/core';

import { Item } from '../../../data/Item.interface';
import { ActivatedRoute, Router } from "@angular/router";
import { Field } from '../../../data/Field.interface';
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

}
