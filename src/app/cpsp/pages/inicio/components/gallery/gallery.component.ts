import { CpspService } from '../../../../services/cpsp.service';
import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../../../../interfaces/gallery.interface';
import { RouterLink } from '@angular/router';
import { NgFor, NgClass, NgIf } from '@angular/common';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
    standalone: true,
    imports: [NgFor, NgClass, NgIf, RouterLink]
})
export class GalleryComponent implements OnInit{

  public gallerys: Gallery[] = [];

  constructor(private cpspservise: CpspService){}

  ngOnInit(){
    this.cpspservise.getGallery().subscribe( gallery => this.gallerys = gallery);

    if (this.gallerys && this.gallerys.length > 0) {
      this.gallerys[0].isActive = true;
    }
  }


}
