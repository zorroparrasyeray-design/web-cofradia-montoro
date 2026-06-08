// Toggle menú hamburguesa
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Cerrar menú cuando se hace click en un link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Datos de noticias (ejemplo)
const noticias = [
    {
        id: 1,
        titulo: "Preparativos para la Semana Santa 2024",
        fecha: "15 de marzo de 2024",
        descripcion: "La cofradía continúa con los preparativos para la Estación de Gloria del Domingo de Resurrección...",
        imagen: "https://images.unsplash.com/photo-1544716278-ca5e3af4abd8?w=400&h=250&fit=crop",
        url: "#"
    },
    {
        id: 2,
        titulo: "Nueva imagen de Santa María Magdalena",
        fecha: "10 de marzo de 2024",
        descripcion: "Presentamos el nuevo paso escultórico que acompañará a nuestro Señor en este año...",
        imagen: "https://images.unsplash.com/photo-1578926078328-123f5474f1f0?w=400&h=250&fit=crop",
        url: "#"
    },
    {
        id: 3,
        titulo: "Convocatoria de nuevo hermano",
        fecha: "5 de marzo de 2024",
        descripcion: "Abrimos convocatoria para nuevos hermanos en la cofradía. Cuota anual: 6€...",
        imagen: "https://images.unsplash.com/photo-1552058544-f6b08422138a?w=400&h=250&fit=crop",
        url: "#"
    }
];

// Datos de actividades
const actividades = [
    {
        fecha: "26 de Marzo - Domingo de Resurrección",
        nombre: "🕊️ Estación de Gloria",
        descripcion: "Procesión solemne del Santísimo Cristo Resucitado por las calles de Montoro. Salida: 10:30h | Recogida: 13:30h"
    },
    {
        fecha: "15 de Abril - Lunes",
        nombre: "✝️ Triduo Cuaresmal",
        descripcion: "Celebración eucarística con predicación y oración comunitaria en la Ermita de la Virgen de Gracia."
    },
    {
        fecha: "1 de Mayo - Miércoles",
        nombre: "🌿 Cruz de Mayo",
        descripcion: "Tradicional celebración con actuaciones folclóricas y convivencia entre hermanos."
    },
    {
        fecha: "15 de Mayo - Miércoles",
        nombre: "🚴 Día de la Bicicleta",
        descripcion: "Actividad lúdica y deportiva para hermanos y familias por las afueras de Montoro."
    }
];

// Cargar noticias en la página
function cargarNoticias() {
    const container = document.getElementById('noticias-container');
    if (!container) return;

    container.innerHTML = noticias.map(noticia => `
        <div class="noticia-card">
            <img src="${noticia.imagen}" alt="${noticia.titulo}">
            <div class="noticia-content">
                <h3>${noticia.titulo}</h3>
                <div class="noticia-date">${noticia.fecha}</div>
                <p>${noticia.descripcion}</p>
                <a href="${noticia.url}" class="noticia-link">Leer más →</a>
            </div>
        </div>
    `).join('');
}

// Cargar actividades en la página
function cargarActividades() {
    const container = document.getElementById('actividades-container');
    if (!container) return;

    container.innerHTML = actividades.map(actividad => `
        <div class="actividad-item">
            <div class="actividad-fecha">${actividad.fecha}</div>
            <div class="actividad-nombre">${actividad.nombre}</div>
            <div class="actividad-desc">${actividad.descripcion}</div>
        </div>
    `).join('');
}

// Ejecutar funciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    cargarNoticias();
    cargarActividades();
});