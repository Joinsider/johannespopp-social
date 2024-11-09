// profile.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  name: string = 'Johannes Popp';
  description: string = "I am currently 18 years old and a student at the DHBW Horb in the field of computer science." +
    "I am interested in software development and have already gained experience in various projects." +
  "You can find some of my projects on my GitHub profile. Just click on one project down below.";
  imageUrl: string = 'assets/profile-image.png'; // Replace with your image path
}
