# SetProject

Comparte tus proyectos con tu amigos fácilmente, con esta aplicación web hecha con React y SASS podrás introducir tus datos y obtener una vista personalizable de tu proyecto.

## Índice

- [Descripción](#descripción)
- [Instalación](#instalación)
- [Uso](#uso)
- [Características](#características)
- [Contribuir](#contribuir)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Descripción

Este proyecto presenta una aplicación web que permite a la usuaria crear una tarjeta personalizable con información, imágenes y enlaces de algún proyecto que desee compartir. La usuaria obtendrá un enlace a la página de su proyecto, el cual podrá compartir por redes sociales o correo electrónico.

## Instalación

1. Clona este repositorio e instala las dependencias necesarias con los siguientes comandos:

```bash
git clone https://github.com/LorenaSTN/project-promo-Y-module-4-team-1.git
cd project-promo-Y-module-4-team-1
npm install
```

2. Crea un archivo .env en la raíz del proyecto con la siguiente información:

```bash
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
URL=url_con_puerto
```

## Uso

Para iniciar este proyecto debes hacerlo con:

```bash
npm run dev
```

## Características

Este proyecto incluye las siguientes características claves:

1.  **Formulario y vista previa:**

    - La aplicación permite a la usuaria introducir la información en un formulario y que este texto se muestre maquetado automáticamente en un cuadro similar a una tarjeta con la información del proyecto.
    - El formulario tiene los siguientes campos:

      - Nombre del proyecto
      - Slogan del proyecto
      - Tecnologías
      - Repo
      - Demo
      - Descripción
      - Nombre de la autora
      - Trabajo de la autora
      - Foto del autora
      - Foto del proyecto

2.  **Creación de tarjeta:**

    - Al hacer clic en el botón de "Crear Tarjeta" se envía el formulario a un API que devuelve la URL de una web con la tarjeta de visita con la información rellena.
    - Se muestra la URL en un popup para que la usuaria verifique si la tarjeta está bien definida.

3.  **Lista de proyectos creados:**

    - La aplicación proporciona una vista que muestra todos los proyectos creados por la usuaria, organizados de manera clara y accesible.
    - La usuaria puede seleccionar cualquier proyecto de la lista para ver un detalle completo con toda la información incluida en la tarjeta, facilitando su revisión o actualización.

4.  **Vista de detalle de cada proyecto:**
    - Cada tarjeta generada tiene una URL única que puede ser compartida fácilmente. Al acceder a esta URL, cualquier persona podrá ver el detalle completo del proyecto, incluyendo toda la información personalizada por la usuaria.

## Endpoints

### Obtener todos los proyectos

`GET /projects/list`

Retorna un listado de todas los proyectos que se han creado.

### Obtener todos los proyectos

`POST /api/project`

Crea una nueva tarjeta de proyecto en la base de datos.

#### Parámetros del cuerpo (JSON)

- name
- slogan
- desc
- technologies
- image
- repo
- demo
- author
- job
- photo

### Obtener un proyecto por su ID

`GET /project/:idProject`

Retorna un proyecto específico según su ID.

### Acceder a la documentación API

Visita http://localhost:5002/api-doc en tu navegador para acceder la documentación generada por Swagger UI.

## Contribuir

Si deseas colaborar con el proyecto, sigue estos pasos:

1. Crea una nueva rama (`git checkout -b nueva-caracteristica`).
2. Realiza los cambios necesarios y haz commit (`git commit -am 'Agrega nueva característica'`).
3. Sube los cambios a tu rama (`git push origin nueva-caracteristica`).
4. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE) en este repositorio.

MIT License

## Contacto

Para cualquier consulta, sugerencia o reporte de problemas, puedes ponerte en contacto con:

- [Gina González](https://github.com/Ginagonzalezgut)
- [Laura Parra](https://github.com/laura-pf)
- [Lorena Sánchez](https://github.com/LorenaSTN)
