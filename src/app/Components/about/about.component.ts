import { Component } from '@angular/core';
import { BorderBoxDirective} from '../../Directives/border-box.directive';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BorderBoxDirective, DatePipe ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  today: Date = new Date()
   images = ['736x/12/3c/aa/123caacc3b6a04a3f70c098104fc0da6', '564x/4b/3a/d5/4b3ad560950fced3b6b7f5b81fa4aeba']
   .map((n)=> `https://i.pinimg.com/${n}.jpg`)

   currentImageIndex: number = 0
   constructor() {
    this.changeImage()
   }

   changeImage(): void {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length
    }, 3000);
   }

   getCurrentImage(): string {
      return this.images[this.currentImageIndex]
   }

}

