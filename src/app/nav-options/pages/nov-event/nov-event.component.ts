import { Component } from '@angular/core';
import { NovEvent } from '../../../interfaces/nov-event.interface';
import { CpspService } from '../../../cpsp/services/cpsp.service';

@Component({
  selector: 'app-nov-event',
  templateUrl: './nov-event.component.html',
  styleUrls: ['./nov-event.component.scss']
})
export class NovEventComponent {

  public novEvent: NovEvent[] = [];

  constructor(private cpspservice: CpspService) { }

  ngOnInit() {
    this.cpspservice.getNovEvent().subscribe(novEvent => this.novEvent = novEvent);
  }

}
