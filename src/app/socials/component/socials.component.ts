import {Component} from '@angular/core';
import { Social } from '../model/socials.model';
import {NgForOf, NgOptimizedImage, NgStyle} from '@angular/common';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css'],
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage,
    NgStyle
  ]
})
export class SocialsComponent {
  socials: Social[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/JOinsider/',
      description: 'My GitHub profile',
      icon_link: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
      reverse: true
    },
    {
      name: 'LinkedIn',
      description: 'Find more information about my professional career',
      url: 'https://www.linkedin.com/in/johannes-popp-63bb7927b/',
      icon_link: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/Joinsider',
      icon_link: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/lazerjoinside/',
      description: 'Follow me on Instagram and checkout my latest photos',
      icon_link: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
    }
    ];
}
