import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GithubProjectsComponent} from './github/component/github.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GithubProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'johannespopp-tech';
}
