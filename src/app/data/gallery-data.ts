import { Gallery } from "../interfaces/gallery.interface";

export const GalleryData: Gallery[] = [
  {
    isActive: true,
    rlink: false,
    path: "assets/bases2024",
    alt: "bases 2024",
    btn: true,
    href: "assets/pdf/Promociones2024.pdf",
    btntext: "¡CONÓCELAS!",
    styleBtn: "background-color: white; color: #16223b; right: 8%; bottom: 10%;",
  },
  {
    isActive: false,
    rlink: false,
    path: "assets/datos-biometricos-1",
    alt: "datos biometricos imagen",
    btn: true,
    href: "assets/pdf/datos biometricos.pdf",
    btntext: "¡REGISTRATE YA!",
    styleBtn: "background-color: #f4a31a; color: #16223b; right: 8%; bottom: 10%; min-width: 200px;",
    etiqueta: "QUEDA POCO TIEMPO"
  },
  {
    isActive: false,
    rlink: true,
    rlinkName: "/inicio/socio",
    path: "assets/inscribeteahoraesmásfacil",
    alt: "Imagen inscribete ahora es más facil",
    btn: true,
    href: "https://www.libertadsanpablo.com/#/inicio/socio",
    btntext: "QUIERO SER SOCIO",
    styleBtn: "background-color: white; color: black; left: 50%; bottom: 10%;",
  },
  {
    isActive: false,
    rlink: true,
    rlinkName: "/btns/alianzas",
    path: "assets/alianzasgal-2",
    alt: "Alianzas imagen",
    btn: true,
    href: "https://www.libertadsanpablo.com/#/btns/alianzas",
    btntext: "VER",
    styleBtn: "background-color: white; color: rgb(63, 126, 189); right: 31%; bottom: 5%",
  },
  {
    isActive: false,
    rlink: false,
    path: "assets/servicioelectronicos-1",
    alt: "Servicios electronicos imagen",
    btn: true,
    href: "/",
    btntext: ""
  }
]
