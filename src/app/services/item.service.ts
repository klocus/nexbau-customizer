import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Item } from '../data/Item.interface';
import { ITEMS } from '../data/Items.database';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getDoors(): Observable<Item[]> {
    return of(ITEMS);
  }

}
