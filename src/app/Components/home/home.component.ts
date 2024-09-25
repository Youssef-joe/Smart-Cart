import { ChangeDetectionStrategy,Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Product } from '../../product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  isVisible: boolean = false;
  prodList: Product[];
  constructor() {
    this.prodList = [
      {id: 1,title: 'first item', name: 'first', image: 'anything', content: "lorem ugnsj"},
      {id: 1,title: 'first item', name: 'first', image: 'anything', content: "lorem ugnsj"},
      {id: 1,title: 'first item', name: 'first', image: 'anything', content: "lorem ugnsj"},
      
      
    ]
  }
  
visible() {
    this.isVisible = !this.isVisible  
}

}
