# Encuentra SERIES

Esta aplicación web realiza búsquedas de series de TV por título, permite crear una lista de series favoritas y gestionarlas de manera intuitiva y sencilla.    

![Captura de pantalla](https://github.com/mariaozamiz/encuentra-series-js/blob/master/src/images/captura_pantalla_encuentra_series.png)


## Instalación

1. Descarga el repositorio.
2. Instala las dependencias con ```npm install```.
3. Arranca el proyecto con ```npm start```.


## Tecnologías utilizadas

- Vanilla JavaScript, DOM avanzado, HTML y CSS (Sass)
- Gulp, [Adalab Web Starter Kit](https://github.com/Adalab/adalab-web-starter-kit)


## Características

### Búsqueda 🔍

- La página consta de un formulario sencillo para realizar búsquedas por título en la [API abierta de TVMaze](https://www.tvmaze.com/api).
  
### Almacenamiento local 🗄️

- La página utiliza el localStorage para guardar un listado de series favoritas. De esta forma, al recargar la página la información estará de nuevo disponible.
  
### Pintado de resultados 📋

- Por cada resultado de búsqueda se pinta una tarjeta de serie, que incluye imagen y título.
- Si alguna serie devuelta por la API no tuviese imagen, se mostrará una imagen de recurso.

```javascript
function createCard(list, element) {
    const newLi = document.createElement('li');
    list.appendChild(newLi);
    newLi.setAttribute('id', element.show.id);
    addImage(newLi, element);
    addTitle(newLi, element);
    return newLi;
    }
```

### Guardado de favoritos ❤️

- Al clickar sobre una serie del listado de resultados ésta se guardará como favorita:
    - Aparecerá en el listado de series favoritas.
    - Se destacará en amarillo el listado de resultados.
  
### Pintado de favoritos 📺

- El listado de series favoritas se mostrará siempre que tenga contenido guardado.
- Cada serie, además de mostrar su imagen y título, incluye un icono que permite eliminarla como favorita.
- Este listado incorpora un botón de "borrar todas".
- Si al realizar una nueva búsqueda apareciese una serie que ya es favorita, se destacará en amarillo entre los resultados de búsqueda.

### Borrar favoritos 💔

- Haciendo click sobre una serie destacada en amarillo entre los resultados de búsqueda. 
- Pulsando el botón "borrar todas" del listado de favoritas.
- Pulsando el icono de borrado individual en cada serie favorita.


## Demo

![Demo](https://github.com/mariaozamiz/encuentra-series-js/blob/master/src/images/encuentra_series_demo.gif)