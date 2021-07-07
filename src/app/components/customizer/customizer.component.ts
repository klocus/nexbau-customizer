import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../data/Item';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss']
})
export class CustomizerComponent implements OnInit {

  public items: Item[] = [];
  public selectedItem!: number;
  public images: string[] = [];
  public scale: number = 1.0;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.getItems();

    this.route.queryParams.subscribe(params => {
      this.prepareItemImages(params);
    });
  }

  private getItems(): void {
    this.itemService.getDoors()
      .subscribe((items) => {
        this.items = items;
        this.getSpecificItemIndex();
      });
  }

  private getSpecificItemIndex(): void {
    this.route.params.subscribe(params => {
      let index: number = this.items.findIndex(x => x.id == params.id);
      if (index > -1) {
        this.selectedItem = index;
        this.prepareItemImages();
        console.log('Item #' + params.id, this.items[this.selectedItem]);
      } else {
        this.router.navigate(['/not-found']);
      }
    });
  }

  private prepareItemImages(options: any = {}): void {
    this.images = [];

    let image: string = '';
    for (let field of this.items[this.selectedItem]['fields']) {
      image = this.items[this.selectedItem]['name'] + '/' + field['name'] + '-';
      image += field['name'] in options ? options[field['name']] : field['options'][0]['value'];
      image += '.png';

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
