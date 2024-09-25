import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RegisterComponent, RouterModule, AboutComponent, ContactComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
