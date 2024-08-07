import { Component } from '@angular/core';

@Component({
  selector: 'app-mantenimiento',
  standalone: true,
  imports: [],
  templateUrl: './mantenimiento.component.html',
  styles: `
  .mantenimiento{
  height: 80vh;
  background-color: var(--color-primario);
  color: white;
  img{
    width: 150px;
    object-fit: cover;
    animation: pulse 2s infinite;
  }
  h1{
    font-size: 3rem;
    font-weight: 700;
    margin: 0;
    color: #efbb21;
  }
  p{
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0;
  }
  span{
    color: #efbb21;
  }
  .col-12{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }
}

  `
})
export class MantenimientoComponent {

}
