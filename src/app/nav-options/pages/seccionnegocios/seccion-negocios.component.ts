import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Negocio {
  nombre: string;
  descripcion: string;
  imagen: string;
  redes: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  contacto: {
    email: string;
    telefono: string;
  };
  ubicacion: string;
  informacionAdicional: string;
  etiquetas: string[];
}

@Component({
  selector: 'app-seccion-negocios',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  template: `
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-5">Sección de Negocios</h2>
        <div class="row mb-4">
          <div class="col-md-6 mx-auto">
            <input
              type="text"
              class="form-control"
              placeholder="Buscar por nombre o etiqueta..."
              [(ngModel)]="searchTerm"
              (ngModelChange)="search()"
            >
          </div>
        </div>
        <div class="row g-4">
          @for (negocio of negociosFiltrados; track negocio.nombre) {
            <div class="col-12 col-lg-6">
              <div class="card h-100" style="content-visibility: auto;">
                <div class="row g-0 h-100">
                  <div class="col-md-4">
                    <img [src]="negocio.imagen" [alt]="negocio.nombre" class="img-fluid rounded-start h-100 object-fit-cover">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body d-flex flex-column h-100">
                      <h5 class="card-title">{{ negocio.nombre }}</h5>
                      <p class="card-text">{{ negocio.descripcion }}</p>
                      <div class="mb-3">
                        <p class="mb-1"><i class="bi bi-envelope-fill me-2"></i>{{ negocio.contacto.email }}</p>
                        <p class="mb-1"><i class="bi bi-telephone-fill me-2"></i>{{ negocio.contacto.telefono }}</p>
                        <p class="mb-1"><i class="bi bi-geo-alt-fill me-2"></i>{{ negocio.ubicacion }}</p>
                      </div>
                      <p class="card-text"><small class="text-muted">{{ negocio.informacionAdicional }}</small></p>
                      <div class="mt-auto">
                        <div class="d-flex flex-wrap gap-2 mb-2">
                          @for (etiqueta of negocio.etiquetas; track etiqueta) {
                            <span class="badge bg-primary">{{ etiqueta }}</span>
                          }
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                            <a [href]="negocio.redes.facebook" target="_blank" class="btn btn-outline-primary btn-sm">
                              <i class="bi bi-facebook"></i>
                            </a>
                            <a [href]="negocio.redes.instagram" target="_blank" class="btn btn-outline-primary btn-sm">
                              <i class="bi bi-instagram"></i>
                            </a>
                            <a [href]="negocio.redes.twitter" target="_blank" class="btn btn-outline-primary btn-sm">
                              <i class="bi bi-twitter"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class SeccionNegociosComponent {
  searchTerm: string = '';
  negocios: Negocio[] = [
    {
      nombre: "Café Aroma",
      descripcion: "Cafetería artesanal con granos de origen único y pasteles caseros.",
      imagen: "/assets/negocios/cafe-aroma.webp",
      redes: {
        facebook: "https://facebook.com/cafearoma",
        instagram: "https://instagram.com/cafearoma",
        twitter: "https://twitter.com/cafearoma",
      },
      contacto: {
        email: "info@cafearoma.com",
        telefono: "+52 33 2345 6789",
      },
      ubicacion: "Av. Chapultepec 123, Colonia Americana, Guadalajara, Jalisco",
      informacionAdicional: "Abierto de lunes a sábado, 7:00 AM - 8:00 PM",
      etiquetas: ["Café", "Pastelería", "Artesanal"]
    },
    {
      nombre: "Tech Innovators",
      descripcion: "Empresa de desarrollo de software especializada en soluciones de IA.",
      imagen: "/assets/negocios/tech-innovators.webp",
      redes: {
        facebook: "https://facebook.com/techinnovators",
        instagram: "https://instagram.com/techinnovators",
        twitter: "https://twitter.com/techinnovators",
      },
      contacto: {
        email: "contact@techinnovators.com",
        telefono: "+52 33 9876 5432",
      },
      ubicacion: "Av. López Mateos Sur 456, Colonia Jardines del Bosque, Guadalajara, Jalisco",
      informacionAdicional: "Especialistas en machine learning y procesamiento de lenguaje natural",
      etiquetas: ["Tecnología", "IA", "Software"]
    },
    {
      nombre: "Eco Moda",
      descripcion: "Tienda de ropa sostenible y accesorios hechos con materiales reciclados.",
      imagen: "/assets/negocios/eco-moda.webp",
      redes: {
        facebook: "https://facebook.com/ecomoda",
        instagram: "https://instagram.com/ecomoda",
        twitter: "https://twitter.com/ecomoda",
      },
      contacto: {
        email: "hola@ecomoda.com",
        telefono: "+52 33 5551 2345",
      },
      ubicacion: "Av. Vallarta 789, Colonia Arcos Vallarta, Guadalajara, Jalisco",
      informacionAdicional: "Comprometidos con la moda ética y el comercio justo",
      etiquetas: ["Moda", "Sostenible", "Reciclaje"]
    },
    {
      nombre: "La Casa del Mezcal",
      descripcion: "Bar especializado en mezcales artesanales y cocina tradicional oaxaqueña.",
      imagen: "/assets/negocios/casa-mezcal.webp",
      redes: {
        facebook: "https://facebook.com/lacasadelmezcal",
        instagram: "https://instagram.com/lacasadelmezcal",
        twitter: "https://twitter.com/lacasadelmezcal",
      },
      contacto: {
        email: "contacto@lacasadelmezcal.com",
        telefono: "+52 33 1234 5678",
      },
      ubicacion: "Calle Morelos 45, Colonia Centro, Guadalajara, Jalisco",
      informacionAdicional: "Abierto de martes a domingo, 5:00 PM - 12:00 AM",
      etiquetas: ["Restaurante", "Gourmet", "Orgánico", "Mezcal"]
    },
    {
      nombre: "Tacos El Buen Pastor",
      descripcion: "Tacos al pastor con un toque único de la casa, acompañados de salsas caseras.",
      imagen: "/assets/negocios/tacos-el-buen-pastor.webp",
      redes: {
        facebook: "https://facebook.com/elbueno",
        instagram: "https://instagram.com/elbueno",
        twitter: "https://twitter.com/elbueno",
      },
      contacto: {
        email: "info@tacosbuenpastor.com",
        telefono: "+52 33 6543 2109",
      },
      ubicacion: "Av. México 987, Colonia Providencia, Guadalajara, Jalisco",
      informacionAdicional: "Abierto todos los días, 1:00 PM - 2:00 AM",
      etiquetas: ["Tacos", "Comida Rápida", "Mexicano"]
    },
    {
      nombre: "Estudio Fotográfico Enfoque",
      descripcion: "Estudio especializado en sesiones fotográficas profesionales.",
      imagen: "/assets/negocios/estudio-fotografico-enfoque.webp",
      redes: {
        facebook: "https://facebook.com/estudioenfoque",
        instagram: "https://instagram.com/estudioenfoque",
        twitter: "https://twitter.com/estudioenfoque",
      },
      contacto: {
        email: "contacto@estudioenfoque.com",
        telefono: "+52 33 2222 3344",
      },
      ubicacion: "Plaza del Sol 123, Colonia Ciudad del Sol, Guadalajara, Jalisco",
      informacionAdicional: "Sesiones fotográficas de lunes a sábado bajo previa cita",
      etiquetas: ["Fotografía", "Profesional", "Estudio"]
    },
    {
      nombre: "Viajes México Aventura",
      descripcion: "Agencia de viajes especializada en turismo de aventura y ecoturismo.",
      imagen: "/assets/negocios/viajes-mexico-aventura.webp",
      redes: {
        facebook: "https://facebook.com/mexicoaventura",
        instagram: "https://instagram.com/mexicoaventura",
        twitter: "https://twitter.com/mexicoaventura",
      },
      contacto: {
        email: "reservas@viajesmexicoaventura.com",
        telefono: "+52 33 7788 9900",
      },
      ubicacion: "Calle Pedro Moreno 450, Colonia Americana, Guadalajara, Jalisco",
      informacionAdicional: "Ofrecemos tours personalizados a las principales reservas naturales de México",
      etiquetas: ["Viajes", "Aventura", "Ecoturismo"]
    },
    {
      nombre: "Panadería El Trigo Dorado",
      descripcion: "Panadería artesanal con recetas tradicionales y opciones integrales.",
      imagen: "/assets/negocios/panaderia-el-trigo-dorado.webp",
      redes: {
        facebook: "https://facebook.com/trigodorado",
        instagram: "https://instagram.com/trigodorado",
        twitter: "https://twitter.com/trigodorado",
      },
      contacto: {
        email: "hola@trigodorado.com",
        telefono: "+52 33 1122 3344",
      },
      ubicacion: "Calle Miguel Hidalgo 200, Colonia Santa Teresita, Guadalajara, Jalisco",
      informacionAdicional: "Abierto todos los días de 6:00 AM a 8:00 PM",
      etiquetas: ["Panadería", "Artesanal", "Integral"]
    },
    {
      nombre: "Gym PowerFit",
      descripcion: "Gimnasio de alta tecnología con entrenadores personales y clases grupales.",
      imagen: "/assets/negocios/gym-powerfit.webp",
      redes: {
        facebook: "https://facebook.com/gympowerfit",
        instagram: "https://instagram.com/gympowerfit",
        twitter: "https://twitter.com/gympowerfit",
      },
      contacto: {
        email: "contacto@gympowerfit.com",
        telefono: "+52 33 1234 5678",
      },
      ubicacion: "Av. Patria 1000, Colonia Jardines Universidad, Guadalajara, Jalisco",
      informacionAdicional: "Abierto las 24 horas, todos los días",
      etiquetas: ["Gimnasio", "Entrenamiento", "Fitness"]
    },
    {
      nombre: "Restaurante La Parrilla Norteña",
      descripcion: "Restaurante de carnes asadas al estilo norteño, con ingredientes frescos y locales.",
      imagen: "/assets/negocios/la-parilla-norteña.webp",
      redes: {
        facebook: "https://facebook.com/laparrillanortena",
        instagram: "https://instagram.com/laparrillanortena",
        twitter: "https://twitter.com/laparrillanortena",
      },
      contacto: {
        email: "reservas@laparrillanortena.com",
        telefono: "+52 33 5678 1234",
      },
      ubicacion: "Carretera a Saltillo 345, Colonia El Batán, Guadalajara, Jalisco",
      informacionAdicional: "Abierto de lunes a domingo, 12:00 PM - 10:00 PM",
      etiquetas: ["Restaurante", "Carnes Asadas", "Norteño"]
    }
  ];

  negociosFiltrados: Negocio[] = this.negocios;

  search() {
    if (!this.searchTerm) {
      this.negociosFiltrados = this.negocios;
      return;
    }

    const term = this.searchTerm.toLowerCase();
    this.negociosFiltrados = this.negocios.filter(negocio =>
      negocio.nombre.toLowerCase().includes(term) ||
      negocio.etiquetas.some(etiqueta => etiqueta.toLowerCase().includes(term))
    );
  }

}
