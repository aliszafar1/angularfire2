import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
    <ul>
      <li *ngFor="let item of items | async">
        {{item.$value}}
      </li>
    </ul>
  `,
})
export class AppComponent  { 
  name = 'Angular';
  items: FirebaseListObservable<any[]>;

  constructor(af: AngularFire ) { 
    this.items = af.database.list('/items');
    }
 }