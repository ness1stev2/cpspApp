import { Component, Input, AfterContentInit } from '@angular/core';

interface Source {
  path: string;
  media: string;
  styles?: string;
}

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements AfterContentInit{

  @Input() path = "";
  @Input() alt = "";
  @Input() style = "";
  @Input() class = "";
  sources: Source[] = [];

  ngAfterContentInit(): void {
    this.generateSizes();
  }

  generateSizes(){
    const splitPath = this.path.split('/');
    const fullName = splitPath.pop();
    const path = splitPath.join('/');
    const splitName = fullName?.split('.') ?? [];
    const ext = splitName.pop();
    const name = splitName.pop();

    this.sources = [
      {
        path: `${path}/${name}-large.webp`,
        media: '(min-width: 2000px)'
      },
      {
        path: `${path}/${name}-medium.webp`,
        media: '(min-width: 520px)'
      },
      {
        path: `${path}/${name}-small.webp`,
        media: '(min-width: 200px)'
      },
      {
        path: `${path}/${name}-large.${ext}`,
        media: '(min-width: 2000px)'
      },
      {
        path: `${path}/${name}-medium.${ext}`,
        media: '(min-width: 520px)'
      },
      {
        path: `${path}/${name}-small.${ext}`,
        media: '(min-width: 200px)'
      },
    ]
  }
}
