import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { RegisterComponent } from './Components/register/register.component';
import { CommonModule } from '@angular/common';
import { AboutComponent } from "./Components/about/about.component";
import { ContactComponent } from "./Components/contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, RegisterComponent, SidebarComponent, HeaderComponent, FooterComponent, AboutComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = '';
  showSidebar: boolean = true;
  showLogin: boolean = false;
  showAbout: boolean = false;
  showContact: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // const url = event.url;
        this.handleRouting(event.url)
       
      }
    });
  }
  handleRouting(url: string): void {
    this.showSidebar = !(url === '/register' || url === '/about' || url === '/contact')
    this.showAbout = (url === '/about')
    this.showContact = (url === '/contact')
    this.showLogin = (url === '/register')
    
  }
}
