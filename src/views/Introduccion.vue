<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/1.svg", data-aos="zoom-in")
      .col-lg-8
        .bg-color-6.p-5(data-aos="fade-left").mb-3
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El desarrollo web moderno requiere una comprensión profunda de las tecnologías que operan en el entorno servidor, donde se ejecuta la lógica de negocio y se gestiona la persistencia de datos de las aplicaciones web. Esta unidad se enfoca en el back-end como el componente fundamental que permite crear aplicaciones web dinámicas, interactivas y escalables. Al dominar estas tecnologías, se adquiere la capacidad de construir sistemas robustos que procesen solicitudes de usuarios, manejen autenticación y gestionen grandes volúmenes de información de manera eficiente.
        p(data-aos="fade-left") Al finalizar esta unidad, se habrá desarrollado la habilidad para realizar aplicaciones web dinámicas y conectadas a bases de datos, aplicando tecnologías de back-end como servidores y consultas SQL para la gestión de datos. Este resultado de aprendizaje integra conocimientos teóricos y habilidades prácticas que permitirán implementar soluciones completas de software. Se dominará el uso de tecnologías del servidor, la configuración de entornos de desarrollo o producción, y la integración efectiva con sistemas de bases de datos relacionales y NoSQL.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/3.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-2.p-5(data-aos="fade-left").mb-3
          p.mb-0 El dominio de estas tecnologías constituye una habilidad altamente demandada en el mercado laboral actual, donde las empresas buscan profesionales capaces de crear backends escalables y seguros. Las habilidades adquiridas en esta unidad, son fundamentales para roles como desarrollador full-stack, ingeniero de software backend y arquitecto de aplicaciones web. Estas competencias abren oportunidades profesionales en sectores diversos como fintech, e-commerce, healthcare y tecnología, donde la gestión eficiente de datos y la creación de APIs robustas son cruciales para el éxito empresarial.
        p(data-aos="fade-left") La unidad se estructura en tres componentes interconectados que proporcionan una formación integral en desarrollo backend. 

    .bg-full-width.bg-color-3
      .p-4.p-md-5
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/intro/4.svg" alt="" style="width: 280px")
              h5.text-center Componente 1
              p.mb-0.text-center Se explorarán las tecnologías del lado del servidor, incluyendo Node.js y Python con sus frameworks especializados.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/intro/5.svg" alt="" style="width: 220px")
              h5.text-center Componente 2
              p.mb-0.text-center Se explica la configuración y administración de servidores web con énfasis en seguridad y despliegue.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/intro/6.svg" alt="" style="width: 220px")
              h5.text-center Componente 3
              p.mb-0.text-center Se profundizará en sistemas de bases de datos relacionales y NoSQL, abarcando desde consultas SQL avanzadas hasta la implementación de soluciones MongoDB, junto con estrategias de integración mediante ORMs y drivers especializados.

        .row.mb-5
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/intro/7.png", data-aos="zoom-in")
          .col-lg-9
            .bg-color-4.text-white.p-5(data-aos="fade-left")
              p.mb-0 Se espera un compromiso con los ejercicios prácticos propuestos, dado que el aprendizaje efectivo del desarrollo backend requiere experimentación directa con código y configuraciones reales. Es recomendable contar con conocimientos previos de programación en JavaScript o Python, así como familiaridad básica con conceptos de desarrollo web frontend. La participación en laboratorios prácticos y la implementación de proyectos integradores permitirán desarrollar las habilidades técnicas necesarias para enfrentar desafíos reales del desarrollo de software empresarial.
    
        
    
        

</template>
