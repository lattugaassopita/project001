import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileSectionImgComponent } from "../profile-section-img/profile-section-img.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [RouterLink, ProfileSectionImgComponent]
})
export class HeaderComponent {
logged: boolean = false;

clicked() {
    console.log('clicked!')
  }
}
