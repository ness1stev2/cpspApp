import { Component, Input } from '@angular/core';

@Component({
  selector: 'portada-component',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss']
})
export class PortadaComponent {
  @Input() img: string = "";
  @Input() title: string = "";
  @Input() alt: string = "";
  @Input() colorText: string = "";
}
