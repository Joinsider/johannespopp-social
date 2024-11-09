import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GithubProjectsComponent} from './github/component/github.component';
import {ProfileComponent} from './profile/profile.component';
import {SocialsComponent} from './socials/component/socials.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GithubProjectsComponent, ProfileComponent, SocialsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'johannespopp-tech';
}
