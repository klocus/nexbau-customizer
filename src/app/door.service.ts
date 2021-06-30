import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Door } from './database/door';
import { DOORS } from './database/db';

@Injectable({
  providedIn: 'root'
})
export class DoorService {

  constructor() { }

  getDoors(): Observable<Door[]> {
    return of(DOORS);
  }

}
