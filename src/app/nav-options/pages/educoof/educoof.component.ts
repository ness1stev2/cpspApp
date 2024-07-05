import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortadaComponent } from '../../../shared/components/portada/portada.component';

@Component({
    templateUrl: './educoof.component.html',
    styleUrls: ['./educoof.component.scss'],
    standalone: true,
    imports: [PortadaComponent, RouterLink]
})
export class EducoofComponent {

}
