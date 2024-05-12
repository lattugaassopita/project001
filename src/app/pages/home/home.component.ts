import { Component } from '@angular/core';
import { CarouselComponent } from "../../components/basics/carousel/carousel.component";
import { LittleManWavingComponent } from '../../components/little-man-waving/little-man-waving.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CarouselComponent, LittleManWavingComponent]
})
export class HomeComponent {

}
