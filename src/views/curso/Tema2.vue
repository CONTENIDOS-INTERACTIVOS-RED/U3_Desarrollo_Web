<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Tecnologías del lado del servidor (Node.js, Python)'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Las tecnologías en el entorno del servidor, constituyen el núcleo operativo donde se ejecuta la lógica de negocio de las aplicaciones web modernas. En el contexto del desarrollo web full-stack, dominar estas tecnologías permite crear sistemas robustos que procesen solicitudes, gestionen autenticación y manejen la comunicación con bases de datos de manera eficiente.
        p Node.js y Python emergen como dos de las tecnologías más influyentes en el panorama actual del desarrollo web back-end. 
    
        .bg-color-6.p-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Estas plataformas ofrecen enfoques diferentes pero complementarios para la construcción de servidores web, donde Node.js destaca por su naturaleza asíncrona y orientada a eventos, mientras que Python brilla por su simplicidad sintáctica y la riqueza de sus frameworks especializados. 
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") La comprensión profunda de ambas tecnologías, proporciona una base sólida para el desarrollo de aplicaciones web escalables y mantenibles.
    
        .bg-color-8.p-5(data-aos="fade-left")
          p.mb-0 Los subtemas que se abordarán incluyen el funcionamiento interno de Node.js con el motor V8, el framework Express.js para la creación de servidores minimalistas, los frameworks Python Flask y Django, la creación de APIs RESTful, y el manejo avanzado de procesos asíncronos. Cada uno de estos elementos contribuye a formar una comprensión integral de las tecnologías del servidor y su aplicación práctica en proyectos reales.
    
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Node.js y su funcionamiento: V8 engine y ejecución en el servidor
    
    .row.align-items-center.mb-5
      .col-lg-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema2/4.svg", style="max-width: 90px").mx-auto
      .col-lg
        p.mb-0 El entendimiento del entorno de ejecución en el desarrollo web backend es esencial para construir aplicaciones eficientes y escalables.
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.text-white.order-2
            h2.mb-4(data-aos="flip-up") Node.js y su funcionamiento: V8 engine y ejecución en el servidor 
            p.mb-4(data-aos="fade-right") En el PDF <b>Node.js y su funcionamiento</b>, se explican los principios fundamentales de esta tecnología, incluyendo su arquitectura basada en el motor V8 y su modelo de ejecución asíncrona. A través de ejemplos prácticos, se ilustra cómo Node.js gestiona múltiples conexiones simultáneas mediante un event loop no bloqueante, optimizando el uso de recursos y mejorando el rendimiento del servidor.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Node.js y su funcionamiento: V8 engine y ejecución en el servidor
    
          .col-lg-4.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/5.png', alt='')
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Express.js: Framework minimalista para crear servidores web
    
    p.mb-5 Express.js se posiciona como el framework web más popular para Node.js, ofreciendo una capa de abstracción minimalista pero poderosa sobre las funcionalidades nativas de HTTP de Node.js. 

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/6.svg")
            .col-lg-9.order-1.mb-3.mb-lg-0
              h3 Filosofía
              p Su filosofía se centra en proporcionar un conjunto robusto de características para aplicaciones web y móviles, manteniendo al mismo tiempo la flexibilidad y simplicidad que caracterizan a Node.js. Express facilita la creación de servidores web mediante un sistema intuitivo de rutas, middleware y manejo de solicitudes HTTP, permitiendo a los desarrolladores construir APIs RESTful y aplicaciones web de manera eficiente.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/7.svg")
            .col-lg-9.order-1.mb-3.mb-lg-0
              h3 Arquitectura
              p La arquitectura de Express.js se fundamenta en el concepto de middleware, funciones que tienen acceso al objeto de solicitud (request), al objeto de respuesta (response) y a la siguiente función de middleware en el ciclo de solicitud-respuesta. Vara Mesa y Granada (2015), destacan que los frameworks del lado del servidor deben proporcionar mecanismos eficientes para el manejo de rutas y la gestión de solicitudes HTTP, características que Express.js implementa de manera elegante a través de su sistema de routing y middleware. Esta aproximación modular permite a los desarrolladores construir aplicaciones escalables donde cada componente tiene responsabilidades bien definidas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/8.svg")
            .col-lg-9.order-1.mb-3.mb-lg-0
              h3 Proyectos
              p En proyectos de ingeniería de software, Express.js se utiliza frecuentemente para crear backends de aplicaciones web complejas y APIs que sirven datos a aplicaciones móviles o frontends basados en frameworks como React o Angular. Un ejemplo típico sería el desarrollo de una API para un sistema de gestión de inventarios, donde Express.js maneja las rutas para operaciones CRUD (Create, Read, Update, Delete), implementa middleware de autenticación y autorización, y gestiona la comunicación con la base de datos a través de controladores especializados.
    
    .bg-full-width.bg-color-9.mb-5
      .p-4.p-md-5
        .row.align-items-center.mb-5
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema2/9.svg", style="max-width: 90px").mx-auto
          .col-lg
            h2(data-aos="fade-left") Ejercicio práctico
        
        p.mb-5 Desarrollar una API básica con Express.js para gestión de usuarios.
        
        .row.justify-content-center
          .col-lg-10
            PasosA.color-primario.mb-5(tipo="n")
              .row.justify-content-center
                .col-lg-9.mb-4.mb-lg-0
                  h3 Paso 1
                  p Instalar Express con npm install express.
                .col-md-4.col-lg-2
                  figure
                    img(src='@/assets/curso/tema2/10.svg', alt='Texto que describa la imagen')
              .row.justify-content-center
                .col-lg-11.mb-4.mb-lg-0.order-2
                  h3 Paso 2
                  p Crear archivo app.js con la estructura:
                  div.git-command-block.text-white
                    p.mb-0 const express = require('express'); const app = express(); app.use(express.json()); let usuarios = []; app.get('/usuarios', (req, res) => res.json(usuarios)); app.post('/usuarios', (req, res) => { const usuario = {id: Date.now(), ...req.body}; usuarios.push(usuario); res.status(201).json(usuario); }); app.listen(3000, () => console.log('API corriendo en puerto 3000'));.
                  
              .row.justify-content-center
                .col-lg-9.mb-4.mb-lg-0
                  h3 Paso 3
                  p Probar con herramientas como Postman o curl.
                .col-md-4.col-lg-2
                  figure
                    img(src='@/assets/curso/tema2/11.svg', alt='Texto que describa la imagen')
              .row.justify-content-center
                .col-lg-9.mb-4.mb-lg-0.order-2
                  h3 Paso 4
                  p Se obtiene una API funcional que permite consultar y crear usuarios, demostrando la simplicidad y poder de Express.js para crear servicios web.
                .col-md-4.col-lg-2.order-1.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema2/12.svg', alt='Texto que describa la imagen')

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Python y frameworks backend: Flask y Django
    
    p.mb-5 La selección del framework adecuado en el desarrollo backend es un paso determinante para construir aplicaciones eficientes y escalables.
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.text-white.order-2
            h2.mb-4(data-aos="flip-up") Python y frameworks backend: Flask y Django  
            p.mb-4(data-aos="fade-right") En el PDF <b>Python y frameworks backend</b>, se analizan las características de Flask y Django, dos de las herramientas más utilizadas en el ecosistema de Python para el desarrollo web. A través de este material, se comparan sus enfoques, funcionalidades y contextos de aplicación, permitiendo comprender cómo elegir entre un enfoque minimalista y flexible o una solución robusta e integral según las necesidades del proyecto.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Python y frameworks backend: Flask y Django 
    
          .col-lg-4.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/13.png', alt='')

    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Uso de Node.js y Python en el desarrollo de APIs: creación de APIs RESTful
    
    .bg-full-width.bg-color-3.mb-5
      .p-4.p-md-5
        .row.align-items-center.mb-5
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema2/14.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 La creación de APIs RESTful constituye una competencia fundamental en el desarrollo web moderno, donde tanto Node.js como Python ofrecen herramientas robustas para implementar servicios web que siguen los principios REST (Representational State Transfer). Estas APIs permiten la comunicación entre diferentes sistemas y aplicaciones de manera estandarizada, utilizando los métodos HTTP (GET, POST, PUT, DELETE) para realizar operaciones sobre recursos identificados por URLs únicas. 

        .row.justify-content-center.align-items-stretch
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/15.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2.text-center 01
                p.mb-0 La arquitectura RESTful promueve la escalabilidad, la simplicidad y la interoperabilidad entre sistemas heterogéneos.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/16.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2.text-center 02
                p.mb-0 Node.js, a través de Express.js, y Python, mediante Flask o Django REST Framework, proporcionan ecosistemas completos para el desarrollo de APIs RESTful.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/17.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Vara Mesa et al. (2015), destacan que el desarrollo de aplicaciones web en el entorno servidor requiere arquitecturas que faciliten la comunicación entre componentes distribuidos, objetivo que las APIs RESTful cumplen de manera eficiente. Ambas tecnologías ofrecen características específicas: Node.js es excelente en aplicaciones que requieren alta concurrencia y tiempo real, mientras que Python destaca por su claridad sintáctica y las potentes librerías disponibles para procesamiento de datos y machine learning.
    
        .bg-color-2.p-5(data-aos="fade-left")
          p.mb-0 En el contexto de la ingeniería de software, las APIs RESTful desarrolladas con Node.js y Python se utilizan extensivamente en arquitecturas de microservicios y aplicaciones distribuidas. Por ejemplo, Spotify utiliza APIs desarrolladas en Python para su sistema de recomendaciones musicales, aprovechando las librerías de machine learning, mientras que WhatsApp emplea Node.js para sus APIs de mensajería en tiempo real, beneficiándose de su capacidad para manejar millones de conexiones concurrentes.

    .bg-full-width.bg-color-9.mb-5
      .p-4.p-md-5
        .row.align-items-center.mb-5
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema2/9.svg", style="max-width: 90px").mx-auto
          .col-lg
            h2(data-aos="fade-left") Ejercicio práctico
        
        p.mb-5 Desarrollar una API RESTful completa para gestión de productos. 
        
        .row.justify-content-center
          .col-lg-10
            PasosA.color-primario.mb-5(tipo="n")
              .row.justify-content-center
                .col-lg-11.mb-4.mb-lg-0
                  h3 Paso 1
                  p Con Node.js/Express, crear estructura:
                  div.git-command-block.text-white
                    p.mb-0 const express = require('express'); const app = express(); app.use(express.json()); let productos = [{id: 1, nombre: 'Laptop', precio: 1500}]; app.get('/api/productos', (req, res) => res.json(productos)); app.post('/api/productos', (req, res) => { const producto = {id: Date.now(), ...req.body}; productos.push(producto); res.status(201).json(producto); }); app.put('/api/productos/:id', (req, res) => { const id = parseInt(req.params.id); const index = productos.findIndex(p => p.id === id); if(index !== -1) { productos[index] = {id, ...req.body}; res.json(productos[index]); } else { res.status(404).json({error: 'Producto no encontrado'}); } }); app.delete('/api/productos/:id', (req, res) => { const id = parseInt(req.params.id); productos = productos.filter(p => p.id !== id); res.status(204).send(); }); app.listen(3000);. 
              .row.justify-content-center
                .col-lg-9.mb-4.mb-lg-0.order-2
                  h3 Paso 2
                  p Probar todas las operaciones CRUD con herramientas como Postman.
                .col-md-4.col-lg-2.order-1.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema2/18.svg', alt='Texto que describa la imagen')
              .row.justify-content-center
                .col-lg-9.mb-4.mb-lg-0
                  h3 Resultado
                  p Se obtiene una API completamente funcional que implementa todos los métodos REST estándar, permitiendo gestionar productos de manera completa.
                .col-md-4.col-lg-2
                  figure
                    img(src='@/assets/curso/tema2/19.svg', alt='Texto que describa la imagen')

    #t_2_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.5] Manejo de procesos asíncronos en Node.js: Promesas y callbacks
    
    p.mb-5 La gestión eficiente de operaciones asíncronas es fundamental en el desarrollo de aplicaciones web modernas, especialmente en entornos donde el rendimiento y la escalabilidad son prioritarios.
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.text-white.order-2
            h2.mb-4(data-aos="flip-up") Manejo de procesos asíncronos en Node.js: Promesas y callbacks  
            p.mb-4(data-aos="fade-right") En el PDF Manejo de procesos asíncronos, se presentan los distintos enfoques que ofrece Node.js para ejecutar tareas no bloqueantes, desde el uso de callbacks tradicionales hasta la implementación de Promesas y async/await. A través de ejemplos prácticos, se exploran las ventajas de cada técnica, facilitando la comprensión de cómo estructurar flujos de trabajo asíncronos de manera clara, mantenible y efectiva.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Manejo de procesos asíncronos en Node.js: Promesas y callbacks 
    
          .col-lg-4.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/20.png', alt='')


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/44134?page=1" target="_blank" rel="noopener noreferrer") Cardador Cabello, A. L. (2015). Desarrollo de aplicaciones web distribuidas (UF1846): ( ed.). IC Editorial. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/101940?page=1" target="_blank" rel="noopener noreferrer") Contreras Castañeda, M. Á. (2016). Desarrollo de aplicaciones web multiplataforma: ( ed.). Ministerio de Educación y Formación Profesional de España. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/249857?page=1" target="_blank" rel="noopener noreferrer") Granados La Paz, R. L. (2023). Desarrollo de aplicaciones web en el entorno servidor. IFCD0210: (1 ed.). IC Editorial. 

 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/62489?page=1" target="_blank" rel="noopener noreferrer") Vara Mesa, J. M. Verde Marín, J. & López Sanz, M. (2015). Desarrollo web en entorno servidor: ( ed.). RA-MA Editorial. 




            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-22-04 " target="_blank" rel="noopener noreferrer") DigitalOcean. (2023). Initial server setup with Ubuntu 22.04. 




            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.apachefriends.org " target="_blank" rel="noopener noreferrer") Apache Friends. (2024). XAMPP installers and downloads for Apache Friends. 




            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://stormwindstudios.com/virtual-labs" target="_blank" rel="noopener noreferrer") 1.	Stormwind Studios. (s.f.). Virtual Labs – free virtual labs environment. Stormwind Studios.   Descripción: Plataforma que ofrece laboratorios virtuales para la configuración de servidores y pruebas de administración, usando sistemas Linux y Windows Server en entornos seguros de práctica.



            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.apachefriends.org" target="_blank" rel="noopener noreferrer") 2.	Apache Friends. (2024). XAMPP installers and downloads for Apache Friends.  Descripción: Instalador completo para configurar un servidor local (Apache, MySQL, PHP, Perl), facilitando ensayos y desarrollo de aplicaciones web de forma autónoma.

           

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/pmpUfEo3GpU" target="_blank" rel="noopener noreferrer") Demonassit Mino. (2023, 22 de marzo). 01 Primeros Pasos con Node. [Vídeo] YouTube. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/oyQuNmkXNeI " target="_blank" rel="noopener noreferrer") LibreByte. (2024, 31 de agosto). PHP, MySQL, Apache y Docker en Acción. [Vídeo] YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
