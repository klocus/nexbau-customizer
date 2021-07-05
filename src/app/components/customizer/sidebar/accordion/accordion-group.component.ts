import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accordion-group',
  template: `
  <div class="group">
    <div class="title" (click)="toggle.emit()">
      {{title}}
    </div>
    <div class="body" [ngClass]="{'hidden': !opened}">
      <ng-content></ng-content>
    </div>
  </div>
  `,
  styleUrls: ['accordion-group.component.scss'],
})
export class AccordionGroupComponent {

  @Input() opened = false;

  @Input() title!: string;

  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
}
