export interface Alianza {
  nombre: string;
  beneficio: string;
  pdfName: string;
  img: string;
  redesSocialesUrl: {
    noTelefono: string;
    email?: string;
    sitioWeb?: string;
    facebook?: string;
    instagram?: string;
    twitter?: string;
    tiktok?: string;
    youtube?: string;
  }
}
