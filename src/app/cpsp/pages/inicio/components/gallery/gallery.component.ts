import { CpspService } from 'src/app/cpsp/services/cpsp.service';
import { Component } from '@angular/core';
import { Gallery } from 'src/app/interfaces/gallery.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  public gallerys: Gallery[] = [];

  constructor(private cpspservise: CpspService){}

  ngOnInit(){
    this.cpspservise.getGallery().subscribe( gallery => this.gallerys = gallery);
  }


}
