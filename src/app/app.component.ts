import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { LeftContainerComponent } from './left-container/left-container.component'
// import { RightContainerComponent } from './right-container/right-container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    // LeftContainerComponent,
    // RightContainerComponent
    NavbarComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    MainContentComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  // User
  user: User = {
    fname: "Donald",
    lname: "Trump",
    profileIcon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.starbiz.com%2F2018%2F12%2F28%2Fsalman-khan-1-e602.jpg&f=1&nofb=1&ipt=f04b0e1fe4b144be3de27aaa8f6bc05b023f4cf865be3f0cdd8ca4c4be0b9e2e&ipo=images"
  }
}
