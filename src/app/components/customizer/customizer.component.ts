import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../data/Item.interface';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Field } from '../../data/Field.interface';
import { Condition } from '../../data/Condition.interface';

@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss']
})
export class CustomizerComponent implements OnInit {

  public loading: boolean = true;

  public items: Item[] = [];

  public preloadImages: HTMLImageElement[] = [];

  public loadedImages: number = 0;

  public selectedItem!: Item;

  public selectedItemImages: string[] = [];

  public scale: number = 1.0;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.getItems();

    this.route.queryParams.subscribe(params => {
      this.updateSelectedItemOptions(params);
      this.handleSelectedItemConditions();
      this.prepareSelectedItemImages();
    });
  }

  private getItems(): void {
    this.itemService.getDoors()
      .subscribe((items) => {
        this.items = items;
        this.preloadAllImages();
        this.getSelectedItem();
      });
  }

  private preloadAllImages(): void {
    for (let item of this.items) {
      for (let field of item.fields) {
        for (let option of field.options) {
          if (!field?.noRender && option.value) {
            const image: HTMLImageElement = new Image();
            image.src = `/assets/images/items/${item.name}/${field.name}-${option.value}.png`;
            image.onload = () => {
              this.countPreloadedImages();
            }
            this.preloadImages.push(image);
          }
        }
      }
    }
  }

  private countPreloadedImages() {
    this.loadedImages++;

    if (this.preloadImages.length === this.loadedImages) {
      this.loading = false;
    }
  }

  private getSelectedItem(): void {
    this.route.params.subscribe(params => {
      let index: number = this.items.findIndex(x => x.name == params.name);
      if (index > -1) {
        this.selectedItem = this.items[index];
        this.handleSelectedItemConditions();
        this.prepareSelectedItemImages();
      } else {
        this.router.navigate(['/not-found']);
      }
    });
  }

  private updateSelectedItemOptions(options: Params): void {
    for (let field of this.selectedItem.fields) {
      if (field.name in options) {
        let index: number = field.options.findIndex(x => x.value == options[field.name]);
        if (index > -1) {
          field.selected = index;
        }
      }
    }
  }

  private handleSelectedItemConditions() {
    for (let field of this.selectedItem.fields) {
      if (field?.condition) {
        const condition: Condition = field.condition;
        const conditionRelation: string | undefined = field.condition?.relation;

        let result: boolean[] = [];
        for (const item of condition.items) {
          const conditionField: Field | undefined = this.selectedItem.fields.find(x => x.name == item.field);

          switch (item.compare || '=') {
            case '=':
              result.push(conditionField?.options[conditionField.selected].value === item.value);
              break;

            case '!=':
              result.push(conditionField?.options[conditionField.selected].value !== item.value);
              break;
          }
        }

        if (!conditionRelation || conditionRelation === 'AND') {
          field.noRender = result.includes(false);
        } else {
          field.noRender = !result.includes(true);
        }

        field.condition.satisfied = !field.noRender;
      }
    }
  }

  private prepareSelectedItemImages(): void {
    this.selectedItemImages = [];

    let image: string = '';
    for (let field of this.selectedItem.fields) {
      if (!field?.noRender && field['options'][field['selected']]['value']) {
        image = '/assets/images/items/';
        image += this.selectedItem.name + '/' + field.name + '-';
        image += field['options'][field['selected']]['value'] + '.png';

        this.selectedItemImages.push(image);
      }
    }
  }

  public zoom(type: string): void {
    if (type === '+') {
      if (this.scale < 1.4) {
        this.scale += 0.1;
      }
    } else {
      if (this.scale > 1.0) {
        this.scale -= 0.1;
      }
    }
  }

}
