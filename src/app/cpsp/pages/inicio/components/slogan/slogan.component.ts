import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'slogan-component',
    templateUrl: './slogan.component.html',
    styleUrls: ['./slogan.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class SloganComponent {

}
