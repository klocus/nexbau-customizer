import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { AccordionGroupComponent } from './accordion-group.component';

@Component({
  selector: 'app-accordion',
  template: `<ng-content></ng-content>`
})
export class AccordionComponent implements AfterContentInit {

  @ContentChildren(AccordionGroupComponent) groups!: QueryList<AccordionGroupComponent>;

  constructor() { }

  /**
   * Invoked when all children (groups) are ready
   */
  ngAfterContentInit(): void {
    // Set active first element
    this.groups.toArray()[0].opened = true;
    // Loop through all groups
    this.groups.toArray().forEach((group) => {
      // Subscribe for event "toggle" & open the group
      group.toggle.subscribe(() => {
        this.openGroup(group);
      });
    });
  }

  openGroup(group: any) {
    // Close all groups
    this.groups.toArray().forEach(x => x.opened = false);
    // Open selected group
    group.opened = true;
  }

}
