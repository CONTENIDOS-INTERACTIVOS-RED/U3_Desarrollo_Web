<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Configuración de servidores'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La configuración de servidores constituye un aspecto fundamental en el desarrollo web, que determina la capacidad de una aplicación para operar de manera eficiente, segura y escalable en entornos de producción. Este proceso involucra múltiples aspectos técnicos que van desde la configuración básica del servidor hasta la implementación de medidas de seguridad avanzadas.
    
        .bg-color-2.p-5(data-aos="fade-left")
          p La gestión adecuada de servidores web, requiere conocimientos especializados en arquitecturas de software, protocolos de red y mejores prácticas de seguridad.
          p Los desarrolladores deben dominar conceptos como el manejo de rutas, la implementación de middleware, la configuración de bases de datos y las estrategias de despliegue en diferentes plataformas cloud.
          p Esta comprensión integral permite crear sistemas robustos que puedan soportar las demandas del tráfico real, mantener altos estándares de disponibilidad y rendimiento.
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Los subtemas que se explorarán incluyen la configuración específica de servidores con Node.js, el manejo avanzado de rutas y middleware en Express.js, las estrategias de despliegue en plataformas como Heroku y AWS, la configuración de diferentes sistemas de bases de datos, y la implementación de medidas de seguridad básicas. Cada uno de estos elementos, contribuye a formar una base sólida para el despliegue y mantenimiento de aplicaciones web en entornos profesionales.
    
    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Configuración de servidores con Node.js: Creación y despliegue de servidores web
    
    .row.align-items-center.mb-5
      .col-lg-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema3/3.svg", style="max-width: 90px").mx-auto
      .col-lg
        p.mb-0 La configuración adecuada de servidores web es esencial para garantizar el rendimiento, la estabilidad y la escalabilidad de las aplicaciones en entornos reales de producción.
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.text-white.order-2
            h2.mb-4(data-aos="flip-up") Configuración de servidores con Node.js: Creación y despliegue de servidores web  
            p.mb-4(data-aos="fade-right") En el PDF <b>Configuración de servidores con Node.js</b>, se estudian los principales componentes necesarios para crear y desplegar servidores robustos utilizando esta tecnología. A través de ejemplos prácticos, se abordan temas como el uso de módulos nativos, la gestión de variables de entorno, el manejo de clústeres y la implementación de prácticas recomendadas para asegurar que el servidor responda eficientemente ante distintas cargas de trabajo y condiciones operativas.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Configuración de servidores con Node.js: Creación y despliegue de servidores web 
    
          .col-lg-4.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/4.png', alt='')

    .bg-full-width.bg-color-9.mb-5
      .p-4.p-md-5
        #t_3_2.titulo-segundo(data-aos="flip-up")
          h2 #[span 3.2] Manejo de rutas y middleware en Express.js: Enrutamiento y gestión de solicitudes
        
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-6.order-2
            figure
              img(src="@/assets/curso/tema3/5.svg", data-aos="zoom-in")
          .col-lg-6.order-1.mb-3.mb-lg-0
            p(data-aos="fade-left").mb-4 Para conocer sobre esta temática, lo invitamos a escuchar el siguiente podcast.
    
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Fundamentos de la innovación estratégica"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )

        .row.align-items-center.mb-5
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema3/6.svg", style="max-width: 90px").mx-auto
          .col-lg
            h2(data-aos="fade-left") Ejercicio práctico
        
        p.mb-5 Implementar un sistema completo de rutas y middleware para una API de blog. 
        
        .row.justify-content-center
          .col-lg-10
            PasosA.color-primario.mb-5(tipo="n")
              .row.justify-content-center
                .col-lg-11.mb-4.mb-lg-0
                  h3 Paso 1
                  p Crear estructura modular: 
                  div.git-command-block.text-white
                    p.mb-0 // middleware/auth.js: module.exports = (req, res, next) => { const token = req.headers.authorization; if (!token) return res.status(401).json({error: 'Token requerido'}); req.user = {id: 1}; next(); }; // routes/posts.js: const express = require('express'); const router = express.Router(); const auth = require('../middleware/auth'); router.get('/', (req, res) => res.json([{id: 1, titulo: 'Post 1'}])); router.post('/', auth, (req, res) => res.status(201).json({mensaje: 'Post creado'})); module.exports = router;.
              .row.justify-content-center
                .col-lg-11.mb-4.mb-lg-0.order-2
                  h3 Paso 2
                  p Integrar en app.js: 
                  div.git-command-block.text-white
                    p.mb-0 const express = require('express'); const postsRoutes = require('./routes/posts'); const app = express(); app.use('/api/posts', postsRoutes); app.listen(3000);.
                  
              .row.justify-content-center
                .col-lg-9.mb-4.mb-lg-0
                  h3 Paso 3
                  p Probar endpoints con y sin autenticación.
                .col-md-4.col-lg-2
                  figure
                    img(src='@/assets/curso/tema3/7.svg', alt='Texto que describa la imagen')
              .row.justify-content-center
                .col-lg-9.mb-4.mb-lg-0.order-2
                  h3 Resultado
                  p Se obtiene una API modular con middleware de autenticación que demuestra las mejores prácticas de organización de código en Express.js.
                .col-md-4.col-lg-2.order-1.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema3/8.svg', alt='Texto que describa la imagen')

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Despliegue de aplicaciones web: Heroku, AWS, y DigitalOcean
    
    p.mb-5 El despliegue de aplicaciones web es una etapa esencial para garantizar que los desarrollos lleguen al usuario final de manera funcional, segura y escalable.
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.text-white.order-2
            h2.mb-4(data-aos="flip-up") Despliegue de aplicaciones web: Heroku, AWS, y DigitalOcean  
            p.mb-4(data-aos="fade-right") En el PDF <b>Despliegue de aplicaciones web</b>, se exploran los procesos y herramientas necesarios para publicar aplicaciones en la nube utilizando plataformas como Heroku, AWS y DigitalOcean. Este recurso presenta comparaciones prácticas entre los distintos entornos de despliegue, abordando desde configuraciones básicas hasta consideraciones profesionales como la automatización, la gestión de recursos y la adaptación a distintos niveles de demanda.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Despliegue de aplicaciones web: Heroku, AWS, y DigitalOcean 
    
          .col-lg-4.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/9.png', alt='')

    #t_3_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.4] Configuración de servidores de base de datos: MySQL, PostgreSQL, MongoDB
    
    .bg-full-width.bg-color-3
      .p-4.p-md-5
        .row.align-items-center.mb-5
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema3/10.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 La configuración de servidores de base de datos, representa un componente fundamental en la arquitectura de aplicaciones web, donde la elección entre MySQL, PostgreSQL y MongoDB depende de los requisitos específicos de cada proyecto en términos de estructura de datos, escalabilidad y consistencia. 
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/11.svg" alt="" style="width: 175px")
              h5.text-center MySQL
              p.mb-0.text-center Se destaca por su simplicidad y amplia adopción en aplicaciones web tradicionales.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/12.svg" alt="" style="width: 82px")
              h5.text-center PostgreSQL
              p.mb-0.text-center Ofrece características avanzadas y cumplimiento estricto con estándares SQL.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/13.svg" alt="" style="width: 52px")
              h5.text-center MongoDB
              p.mb-0.text-center Proporciona flexibilidad para manejar datos no estructurados y escalamiento horizontal.

    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 La configuración adecuada de estos sistemas, incluye aspectos como la optimización de rendimiento, la configuración de réplicas y la implementación de estrategias de backup.

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/14.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La configuración de servidores de base de datos, involucra múltiples aspectos técnicos como la definición de usuarios y permisos, la configuración de conexiones remotas, la optimización de índices y consultar (queries), y la implementación de medidas de seguridad. Granados La Paz (2023), enfatiza que la gestión de datos en aplicaciones web del entorno del servidor, requiere configuraciones que balanceen rendimiento, seguridad y disponibilidad. Para MySQL y PostgreSQL, esto incluye la configuración de parámetros como max_connections, buffer_pool_size y shared_buffers, mientras que para MongoDB implica la configuración de réplica sets, sharding y los índices apropiados.
    
        .bg-color-6.p-5.mb-3(data-aos="fade-left")
          p.mb-0 En proyectos de ingeniería de software, la configuración de bases de datos, se adapta a patrones específicos de uso. Por ejemplo, aplicaciones de e-commerce típicamente utilizan MySQL o PostgreSQL para datos transaccionales críticos como inventarios y pedidos, debido a su soporte robusto para transacciones ACID.
        p Por otro lado, aplicaciones como sistemas de gestión de contenido o analíticas en tiempo real, frecuentemente emplean MongoDB por su capacidad para manejar documentos complejos y escalamiento horizontal eficiente.

    .bg-full-width.bg-color-9.mb-5
      .p-4.p-md-5
        .row.align-items-center.mb-5
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema3/6.svg", style="max-width: 90px").mx-auto
          .col-lg
            h2(data-aos="fade-left") Ejercicio práctico
        
        p.mb-5 Configurar y conectar los tres tipos de bases de datos desde Node.js.  
        
        .row.justify-content-center
          .col-lg-10
            PasosA.color-primario.mb-5(tipo="n")
              .row.justify-content-center
                .col-lg-11.mb-4.mb-lg-0
                  h3 Paso 1
                  p Configurar MySQL: 
                  div.git-command-block.text-white
                    p.mb-0 CREATE DATABASE testdb; CREATE USER 'appuser'@'localhost' IDENTIFIED BY 'password'; GRANT ALL PRIVILEGES ON testdb.* TO 'appuser'@'localhost'; y conectar con: const mysql = require('mysql2'); const connection = mysql.createConnection({host: 'localhost', user: 'appuser', password: 'password', database: 'testdb'}); connection.query('SELECT 1', (err, results) => console.log('MySQL conectado'));.
              .row.justify-content-center
                .col-lg-11.mb-4.mb-lg-0.order-2
                  h3 Paso 2
                  p Configurar PostgreSQL: 
                  div.git-command-block.text-white
                    p.mb-0 crear base de datos y conectar con const { Pool } = require('pg'); const pool = new Pool({user: 'postgres', password: 'password', database: 'testdb'}); pool.query('SELECT NOW()', (err, res) => console.log('PostgreSQL conectado'));.
                  
              .row.justify-content-center
                .col-lg-11.mb-4.mb-lg-0.order-2
                  h3 Paso 3
                  p Configurar MongoDB: 
                  div.git-command-block.text-white
                    p.mb-0 const MongoClient = require('mongodb').MongoClient; MongoClient.connect('mongodb://localhost:27017/testdb', (err, client) => console.log('MongoDB conectado'));.
              .row.justify-content-center
                .col-lg-9.mb-4.mb-lg-0.order-2
                  h3 Resultado
                  p Se establecen conexiones funcionales a los tres sistemas de bases de datos, demostrando las diferencias en configuración y conexión de cada tecnología.
                .col-md-4.col-lg-2.order-1.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema3/15.svg', alt='Texto que describa la imagen')

    #t_3_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.5] Seguridad básica en servidores: protección contra ataques comunes (XSS, CSRF)
    
    p.mb-5 La protección de aplicaciones web frente a amenazas comunes es un componente esencial del desarrollo seguro en entornos digitales.
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.text-white.order-2
            h2.mb-4(data-aos="flip-up") Seguridad básica en servidores: protección contra ataques comunes (XSS, CSRF)  
            p.mb-4(data-aos="fade-right") En el PDF <b>Seguridad básica en servidores</b>, se presentan estrategias y prácticas fundamentales para mitigar riesgos asociados a ataques como XSS y CSRF, que pueden comprometer la integridad y confidencialidad de los sistemas. A través de ejemplos prácticos, se analizan mecanismos de defensa como la sanitización de entradas, el uso de políticas de seguridad de contenido y la implementación de tokens CSRF, aportando herramientas clave para fortalecer la seguridad desde las primeras fases del desarrollo.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_6.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Seguridad básica en servidores: protección contra ataques comunes (XSS, CSRF) 
    
          .col-lg-4.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/16.png', alt='')







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
              a(href="https://sqlbolt.com" target="_blank" rel="noopener noreferrer") SQLBolt. (2024). Learn SQL.  

 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.codecademy.com/learn/learn-sql" target="_blank" rel="noopener noreferrer") Codecademy. (2024). Learn SQL.  




            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.mongodb.com/developer/products/mongodb/introduction-to-modern-databases-mongodb-academia/ " target="_blank" rel="noopener noreferrer") MongoDB Inc. (s.f.). Introduction to modern databases with MongoDB. MongoDB Developer Center. 




            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://onecompiler.com/mongodb" target="_blank" rel="noopener noreferrer") 1.	OneCompiler. (s.f.). MongoDB online editor and compiler. OneCompiler.  Descripción: Simulador web interactivo para ejecutar queries MongoDB sin necesidad de instalación, lo que permite experimentar con estructuras NoSQL y comandos CRUD en tiempo real.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose" target="_blank" rel="noopener noreferrer") 2.	2.	MDN Web Docs. (2025, mayo 1). Using Mongoose and MongoDB for a Local Library. MDN Web Docs. Descripción: Tutorial paso a paso que emplea Mongoose (ODM para Node.js) y MongoDB Atlas Sandbox, combinando teoría y práctica en 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/u1kWLvnnZWk" target="_blank" rel="noopener noreferrer") Aprendizaje del día Cero. (2025, 14 de mayo). Estructura de Bases de Datos, "El corazón de la información digital”. [Vídeo] YouTube.  


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/CHpVGFVq5g4 " target="_blank" rel="noopener noreferrer") Facultad de Informática - Universidad Complutense de Madrid. (2018, 4 de enero). Introducción a MongoDB - LibreLabUCM. [Vídeo] YouTube. 

 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
