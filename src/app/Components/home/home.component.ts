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
  isVisible: boolean = true;
  prodList: Product[];
  constructor() {
    this.prodList = [
      {id: 1,title: 'first item', name: 'user', image: 'anything', content: "lorem ugnsj", src: "https://i.pinimg.com/564x/da/e0/54/dae054300eaf49001e8528e9cdf74198.jpg"},
      {id: 1,title: 'second item', name: 'user', image: 'anything', content: "lorem ugnsj", src: "https://i.pinimg.com/736x/fd/fb/ce/fdfbce3810a32a9aff23c4997788803d.jpg"},
      {id: 1,title: 'third item', name: 'user', image: 'anything', content: "lorem ugnsj", src: "https://i.pinimg.com/736x/21/2a/34/212a34b3f6210356dd0ab364bca3cbdf.jpg"},
      
      
    ]
  }
  
  
  


}
