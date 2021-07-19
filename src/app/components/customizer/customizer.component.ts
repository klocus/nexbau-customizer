import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../data/Item.interface';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss']
})
export class CustomizerComponent implements OnInit {

  public items: Item[] = [];
  public selectedItem!: Item;
  public images: string[] = [];
  public scale: number = 1.0;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.getItems();

    this.route.queryParams.subscribe(params => {
      this.updateSelectedItemOptions(params);
      this.prepareSelectedItemImages();
    });
  }

  private getItems(): void {
    this.itemService.getDoors()
      .subscribe((items) => {
        this.items = items;
        this.getSelectedItem();
      });
  }

  private getSelectedItem(): void {
    this.route.params.subscribe(params => {
      let index: number = this.items.findIndex(x => x.id == params.id);
      if (index > -1) {
        this.selectedItem = this.items[index];
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

  private prepareSelectedItemImages(): void {
    this.images = [];

    let image: string = '';
    for (let field of this.selectedItem.fields) {
      image = this.selectedItem.name + '/' + field.name + '-';
      image += field['options'][field['selected']]['value'] + '.png';

      this.images.push(image);
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
