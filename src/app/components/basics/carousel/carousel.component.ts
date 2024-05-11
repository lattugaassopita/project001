import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
    selector: 'app-carousel',
    standalone: true,
    templateUrl: './carousel.component.html',
    styleUrl: './carousel.component.scss',
    imports: [CardComponent]
})
export class CarouselComponent {

}
