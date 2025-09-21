<template lang="pug">
  .curso-main-container.creditos-vista
    BannerInterno(subTitulo="SÍNTESIS")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5

      .row.mb-5
        .col-lg-4.order-lg-2.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/1.png", data-aos="zoom-in")
        .col-lg-8.order-lg-1
          p(data-aos="fade-up") La Unidad 3: Back-end y bases de datos, aborda los aspectos fundamentales de la programación del lado del servidor, centrándose en la creación de servicios que respondan a las necesidades de las aplicaciones web modernas. Esta unidad permite comprender cómo se estructuran los sistemas back-end, cómo se diseñan y consumen APIs, y cómo se integran bases de datos relacionales y no relacionales para gestionar información de manera eficiente.

          p Mediante el uso de herramientas como Node.js, Express y MongoDB, los estudiantes desarrollan competencias en la construcción de aplicaciones dinámicas, funcionales y seguras. El enfoque práctico favorece la comprensión de conceptos como el manejo de peticiones HTTP, el uso de rutas, la gestión de datos persistentes y la implementación de seguridad básica.

          p Este enfoque técnico y aplicado garantiza que los estudiantes adquieran una base sólida en el desarrollo back-end, preparándolos para enfrentar con éxito los desafíos del desarrollo web profesional e integrarse a equipos de trabajo que requieren soluciones tecnológicas robustas y escalables.

      .row.justify-content-center
        .col-lg-12.mb-5
          figure.bg-color-sintesis.p-5.brounded
            img(src='@/assets/curso/sintesis.svg', alt='', data-aos="zoom-in")
</template>
