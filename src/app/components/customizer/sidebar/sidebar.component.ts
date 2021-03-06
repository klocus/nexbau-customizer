import { Component, Input, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { Item } from '../../../data/Item.interface';
import { ActivatedRoute, Router } from "@angular/router";
import { Field } from '../../../data/Field.interface';
import { Option } from '../../../data/Option.interface';
import { Locale } from '../../../data/Locale.interface';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() items!: Item[];
  @Input('selected-item') selectedItem!: Item;

  private params: any = [];

  public localesList: Locale[] = [
    { code: 'en', label: 'English' },
    { code: 'pl', label: 'Polski' }
  ];

  constructor(private route: ActivatedRoute,
              private router: Router,
              @Inject(LOCALE_ID) public currentLocale: string) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.params = params;
    });
  }

  public onOptionClick(name: string, value: string) {
    this.router.navigate([], {queryParams: {[name]: value}, queryParamsHandling: 'merge'});
  }

  public getOptionIcon(field: Field, option: Option): string {
    let image: string;
    if (option.icon) {
      image = `./assets/images/items/${this.selectedItem.name}/icons/${option['icon']}.png`;
    } else {
      if (option.value) {
        image = `./assets/images/items/${this.selectedItem.name}/icons/${field.name}-${option['value']}.png`;
      } else {
        image = './assets/images/none.png';
      }
    }
    
    return image;
  }

  public onSaveClick() {
    html2pdf(document.body, {
      filename: 'Nexbau-Customizer.pdf'
    });
  }

  public onShareClick(element: HTMLElement) {
    navigator.clipboard.writeText(window.location.href);

    element.className = 'fade-in';
    setTimeout(() => {
      element.className = 'fade-out';
    }, 3000);
  }

  public onLocaleChange(event: Event) {
    const input = event.target as HTMLInputElement;
    window.location.href = window.location.href.replace(`/${this.currentLocale}/`, `/${input.value}/`);
  }

}
