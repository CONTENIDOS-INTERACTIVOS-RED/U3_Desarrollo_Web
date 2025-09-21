<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Introducción '")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Desde las aplicaciones de mensajería hasta los sistemas de comercio electrónico, el funcionamiento de la web moderna depende, en gran medida, de los procesos que tienen lugar en el entorno del servidor, donde se procesan las solicitudes del cliente, se gestionan los datos y se ejecuta la lógica de negocio de las aplicaciones. El desarrollo web contemporáneo exige una comprensión integral de estas tecnologías, que constituyen la base para el diseño de soluciones robustas y escalables.
    
        .bg-color-2.p-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Esta unidad introduce en el núcleo del desarrollo web, el back-end, abordando las tecnologías, herramientas y frameworks que permiten crear servidores eficientes, administrar bases de datos relacionales y NoSQL de manera eficaz, y establecer comunicaciones seguras entre el cliente y el servidor. Se invita a explorar este ámbito con el propósito de construir el motor de la web con seguridad, precisión y eficacia.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") La arquitectura del back-end se presenta como un ecosistema complejo donde convergen múltiples tecnologías, cada una con propósitos específicos pero interconectados entre sí. Desde los entornos de ejecución como Node.js hasta los frameworks especializados como Express.js o Django, cada componente desempeña un papel crucial en la construcción de aplicaciones web modernas. Esta comprensión profunda permite desarrollar sistemas que no solo funcionen correctamente, sino que también sean mantenibles, escalables y seguros, características esenciales en el entorno profesional actual donde las aplicaciones deben soportar miles o millones de usuarios simultáneos.
    
        .bg-color-8.p-5(data-aos="fade-left")
          p.mb-0 La integración entre las tecnologías del servidor y los sistemas de bases de datos, representa uno de los pilares fundamentales del desarrollo web contemporáneo. Esta unidad proporciona las herramientas necesarias para comprender cómo diseñar, implementar y mantener sistemas back-end que gestionen eficientemente la persistencia de datos, bien sea a través de bases de datos relacionales tradicionales o mediante sistemas NoSQL más modernos. Al dominar estos conceptos, se adquiere la capacidad de tomar decisiones arquitectónicas informadas que impacten directamente en el rendimiento y la escalabilidad de las aplicaciones desarrolladas.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/101940?page=1" target="_blank" rel="noopener noreferrer") Contreras Castañeda, M. Á. (2016). Desarrollo de aplicaciones web multiplataforma: ( ed.). Ministerio de Educación y Formación Profesional de España. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/249857?page=1" target="_blank" rel="noopener noreferrer") Granados La Paz, R. L. (2023). Desarrollo de aplicaciones web en el entorno servidor. IFCD0210: (1 ed.). IC Editorial. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/62488?page=1" target="_blank" rel="noopener noreferrer") Vara Mesa, J. M. & Granada, D. (2015). Desarrollo web en entorno cliente: ( ed.). RA-MA Editorial. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/62489?page=1" target="_blank" rel="noopener noreferrer") Vara Mesa, J. M. Verde Marín, J. & López Sanz, M. (2015). Desarrollo web en entorno servidor: ( ed.). RA-MA Editorial. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://developer.mozilla.org/es/docs/Learn/Server-side/Node_server_without_framework " target="_blank" rel="noopener noreferrer") Mozilla. (2022). Primeros pasos con Node.js. MDN Web Docs. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://pythontutor.com " target="_blank" rel="noopener noreferrer") Philip Guo. (s.f.). Python Tutor: Visualize code execution to learn Python, Java, C, C++, and JavaScript. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.w3schools.com/nodejs " target="_blank" rel="noopener noreferrer") W3Schools. (2024). Node.js Tutorial. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.jdoodle.com/execute-nodejs-online" target="_blank" rel="noopener noreferrer") 1.	JDoodle. (s.f.). Node.js online compiler and editor. JDoodle. Descripción: Entorno interactivo en línea que permite escribir, compilar y ejecutar código Node.js de forma inmediata, ideal para aprender programación server-side sin configuración local.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://pythontutor.com" target="_blank" rel="noopener noreferrer") 2.	Python Tutor (Guo, P.). (s.f.). Python Tutor: Visualize code execution online. Descripción: Herramienta que simula la ejecución paso a paso de código Python (y otros lenguajes), facilitando la comprensión de lógica y flujo de control en entornos educativos.


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/9jah5MnRXU0 " target="_blank" rel="noopener noreferrer") OpenWebinars. (2017, 24 de octubre). ¿Qué es Flask?. [Vídeo] YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/vAqvbLs77xE" target="_blank" rel="noopener noreferrer") OpenWebinars. (2017, 4 de diciembre). ¿Qué es Django y por qué usarlo. [Vídeo] YouTube.  

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
