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
  public selected!: number;
  public images: string[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.getItems();
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
        this.selected = index;
        this.prepareItemImages();
        console.log('Item #' + params.id, this.items[this.selected]);
      } else {
        this.router.navigate(['/not-found']);
      }
    });
  }

  private prepareItemImages(): void {
    this.images = [];

    for (let field of this.items[this.selected]['fields']) {
      this.images.push(`${this.items[this.selected]['name']}/${field['name']}-${field['options'][0]['value']}.png`);
    }
  }

}
