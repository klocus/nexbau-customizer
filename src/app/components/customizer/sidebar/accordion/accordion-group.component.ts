import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accordion-group',
  templateUrl: './accordion-group.component.html',
  styleUrls: ['accordion-group.component.scss'],
})
export class AccordionGroupComponent {

  @Input() opened = false;

  @Input() title!: string;

  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
}
