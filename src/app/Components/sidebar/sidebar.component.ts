import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatButtonModule, MatSidenavModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  showFiller = false;
  user: any;
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.userService.user$.subscribe((user) => {
      this.user = user
    })
  }
}
