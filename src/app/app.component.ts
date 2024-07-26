import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { SocialSidebarComponent } from "./social-sidebar/social-sidebar.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterLinkActive } from '@angular/router';
import { RouterLink } from '@angular/router';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, SocialSidebarComponent, HomeComponent, FooterComponent, RouterLink, RouterLinkActive, PageNotFoundComponent]
})
export class AppComponent {
  title = 'AngularZavrsni';
}
