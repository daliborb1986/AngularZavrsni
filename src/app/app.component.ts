import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { SocialSidebarComponent } from "./social-sidebar/social-sidebar.component";
import { HomeComponent } from "./home/home.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, SocialSidebarComponent, HomeComponent]
})
export class AppComponent {
  title = 'AngularZavrsni';
}
