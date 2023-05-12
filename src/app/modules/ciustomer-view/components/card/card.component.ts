import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/products';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input({required:true}) item:Product 
}
