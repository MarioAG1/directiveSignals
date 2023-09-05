import { Component } from '@angular/core';

@Component({
  selector: 'app-property-page',
  templateUrl: './property-page.component.html',
  styleUrls: ['./property-page.component.css']
})
export class PropertyPageComponent {


  onFieldUpdated(field: string, value: string) {
    console.log(field, value);

  }

}
