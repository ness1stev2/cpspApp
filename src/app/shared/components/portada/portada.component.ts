import { Component, Input } from '@angular/core';
import { RedesSocialesComponent } from '../redes-sociales/redes-sociales.component';

@Component({
    selector: 'portada-component',
    templateUrl: './portada.component.html',
    styleUrls: ['./portada.component.scss'],
    standalone: true,
    imports: [RedesSocialesComponent]
})
export class PortadaComponent {
  @Input() img: string = "";
  @Input() title: string = "";
  @Input() alt: string = "";
  @Input() colorText: string = "";
}
