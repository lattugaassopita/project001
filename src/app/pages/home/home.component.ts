import { Component } from '@angular/core';
import { CarouselComponent } from "../../components/basics/carousel/carousel.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CarouselComponent]
})
export class HomeComponent {

}
