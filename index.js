import { ocultarSpinner, mostrarSpinner } from "./spinnerTp.js";

document.addEventListener("DOMContentLoaded", onInit); 

function onInit() {
  cardsSectionUno();
  cardsSectionDos();
  mostrarSpinner();
  setTimeout(ocultarSpinner, 2000);
  
  
  
}

function cardsSectionUno() {
  const properties = [
    {
        imagen: "ascets/images/icono1.svg",
        titulo: "SEGURIDAD",
        parrafo: "Al elegir nuestra inmobiliaria, aseguras seguridad y confianza total. Contamos con profesionales que verifican cada propiedad minuciosamente. Ofrecemos transparencia y cumplimos con todas las leyes vigentes. Encuentra tu hogar ideal con tranquilidad y sin preocupaciones con nosotros"
    },
    {
        imagen: "ascets/images/icono2.svg",
        titulo: "EL MEJOR PRECIO",
        parrafo: "Nuestra inmobiliaria ofrece propiedades a precios inmejorables. Descubre apartamentos modernos y casas acogedoras en las mejores ubicaciones. Aprovecha nuestras ofertas únicas y encuentra tu hogar ideal con nosotros."
    },
    {
        imagen: "ascets/images/icono3.svg",
        titulo: "A TIEMPO",
        parrafo: "En nuestra inmobiliaria, optimizamos cada segundo para garantizar transacciones rápidas y efectivas, ofreciéndote resultados sin perder tiempo. Confía en nosotros para encontrar tu hogar perfecto rápidamente."
    }
  ];

  const container = document.getElementById('container-cards-uno');
  const template = document.getElementById('card-template').content;

  properties.forEach(property => {
    const clone = template.cloneNode(true);
    clone.querySelector('.imagen-sectiom-dos').src = property.imagen;
    clone.querySelector('h3').textContent = property.titulo;
    clone.querySelector('p').textContent = property.parrafo;
    container.appendChild(clone);
  });
}

function cardsSectionDos() {

  const propertiesDos = [
    {
        imagen: "ascets/images/anuncio1.jpg",
        title: "Casas de Lujo en el Lago",
        descripcion: "Casas en el lago con excelente vista, acabados de lujo a un excelente precio",
        precio: "U$S350.000",
        iconUno: "ascets/images/icono_wc.svg",
        iconDos: "ascets/images/icono_estacionamiento.svg",
        iconTres: "ascets/images/icono_dormitorio.svg",
        banios: 3,
        autos: 3,
        camas: 4
    },
    {
        imagen: "ascets/images/anuncio2.jpg",
        title: "Casas terminados de lujo",
        descripcion: "Casas en el lago con excelente vista, acabados de lujo a un excelente precio",
        precio: "U$S275.000",
        iconUno: "ascets/images/icono_wc.svg",
        iconDos: "ascets/images/icono_estacionamiento.svg",
        iconTres: "ascets/images/icono_dormitorio.svg",
        banios: 3,
        autos: 3,
        camas: 4
    },
    {
        imagen: "ascets/images/anuncio3.jpg",
        title: "Casas con Pileta",
        descripcion: "Casas en el lago con excelente vista, acabados de lujo a un excelente precio",
        precio: "U$S250.000",
        iconUno: "ascets/images/icono_wc.svg",
        iconDos: "ascets/images/icono_estacionamiento.svg",
        iconTres: "ascets/images/icono_dormitorio.svg",
        banios: 3,
        autos: 3,
        camas: 4
    }
  ]

  const containerDos = document.getElementById('container-cards');
  const templateDos = document.getElementById('card-template-dos').content;

  propertiesDos.forEach(property => {
    const clone = templateDos.cloneNode(true);
    clone.querySelector('.imagen-anuncio').src = property.imagen;
    clone.querySelector('h3').textContent = property.title;
    clone.querySelector('p').textContent = property.descripcion;
    clone.querySelector('.precio').textContent = property.precio;
    clone.querySelector('.icon-uno').src = property.iconUno;
    clone.querySelector('.icon-dos').src = property.iconDos;
    clone.querySelector('.icon-tres').src = property.iconTres;
    clone.querySelector('.banios').textContent = property.banios;
    clone.querySelector('.autos').textContent = property.autos;
    clone.querySelector('.camas').textContent = property.camas;
    containerDos.appendChild(clone);
  });
}




