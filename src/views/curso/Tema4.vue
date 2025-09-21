<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Bases de datos relacionales y NoSQL'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/1.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Las bases de datos constituyen el fundamento de la persistencia de datos en aplicaciones web modernas, donde la elección entre sistemas relacionales y NoSQL determina significativamente la arquitectura, escalabilidad y mantenibilidad de las aplicaciones. Esta decisión implica comprender las diferencias fundamentales entre estos paradigmas y sus casos de uso óptimos.
    
        .bg-color-6.p-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Los sistemas de bases de datos relacionales, representados por MySQL y PostgreSQL, se fundamentan en el modelo relacional con esquemas rígidos, transacciones ACID y el lenguaje SQL estandarizado. Por contraste, las bases de datos NoSQL como MongoDB adoptan enfoques más flexibles con esquemas dinámicos, escalamiento horizontal y modelos de datos orientados a documentos, grafos o columnas. Esta diversidad de opciones requiere una comprensión profunda de los trade-offs entre consistencia, disponibilidad y tolerancia a particiones, según el teorema CAP.
    
    p.mb-5 Los subtemas que se abordarán incluyen el uso práctico de MySQL y PostgreSQL en aplicaciones web, el dominio del lenguaje SQL para consultas complejas, la implementación de soluciones NoSQL con MongoDB, la comparación sistemática entre ambos paradigmas para diferentes casos de uso, y las estrategias de integración con aplicaciones web mediante ORMs y drivers especializados. Cada elemento contribuye a formar una comprensión integral de las tecnologías de persistencia de datos.
    
    #t_4_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.1] Bases de datos relacionales: uso de MySQL y PostgreSQL
    
    p.mb-5 El uso de bases de datos relacionales es fundamental para el almacenamiento estructurado, la integridad de los datos y la eficiencia en aplicaciones web modernas.
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.text-white.order-2
            h2.mb-4(data-aos="flip-up") Bases de datos relacionales: uso de MySQL y PostgreSQL   
            p.mb-4(data-aos="fade-right") En el PDF <b>Bases de datos relacionales</b>, se estudian las características y capacidades de MySQL y PostgreSQL, dos sistemas ampliamente utilizados en el desarrollo backend. A través de ejemplos prácticos, se comparan sus funcionalidades, ventajas y diferencias, facilitando la comprensión de cómo seleccionar e implementar el gestor de base de datos más adecuado según los requerimientos de cada proyecto.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_7.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Bases de datos relacionales: uso de MySQL y PostgreSQL  
    
          .col-lg-4.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/3.png', alt='')

    #t_4_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.2] Consultas SQL: lenguaje SQL para consultas y manipulación de datos

    .bg-full-width.bg-color-3.mb-5
      .p-4.p-md-5
        p.mb-5 El lenguaje SQL (Structured Query Language) constituye el estándar universal para la interacción con bases de datos relacionales, proporcionando un conjunto robusto de comandos para la definición, manipulación y consulta de datos. SQL se divide en varias categorías funcionales: 

        div.row.justify-content-center.align-items-stretch
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema4/4.svg" alt="" style="width: 90px")
              h5.text-center DDL
              p.mb-0.text-center (<em>Data Definition Language</em>) para crear y modificar estructuras de base de datos
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema4/5.svg" alt="" style="width: 90px")
              h5.text-center DML
              p.mb-0.text-center (<em>Data Manipulation Language</em>) para insertar, actualizar y eliminar datos.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema4/6.svg" alt="" style="width: 90px")
              h5.text-center DQL
              p.mb-0.text-center (<em>Data Query Language</em>) para consultas complejas.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema4/7.svg" alt="" style="width: 90px")
              h5.text-center DCL
              p.mb-0.text-center (<em>Data Control Language</em>) para gestión de permisos y seguridad.
    
    .row.align-items-center.mb-5
      .col-lg-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema4/8.svg", style="max-width: 90px").mx-auto
      .col-lg
        p.mb-0 El dominio profundo de SQL permite a los desarrolladores crear consultas eficientes que aprovechen al máximo las capacidades de los motores de base de datos relacionales.
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema4/9.svg")
            .col-lg-8.order-1.mb-3.mb-lg-0
              p Las consultas SQL avanzadas incluyen técnicas como joins complejos, subconsultas correlacionadas, funciones de ventana (window functions), expresiones de tabla común (CTEs) y procedimientos almacenados que permiten implementar lógica de negocio compleja directamente en la base de datos. La optimización de consultas requiere comprender cómo los motores de base de datos ejecutan las consultas, el uso apropiado de índices, y la interpretación de planes de ejecución para identificar cuellos de botella. Granados La Paz (2023), destaca que el desarrollo de aplicaciones web en entorno servidor, requiere conocimientos profundos de SQL para crear consultas eficientes que mantengan el rendimiento incluso con grandes volúmenes de datos.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema4/10.svg")
            .col-lg-9.order-1.mb-3.mb-lg-0
              p En proyectos de ingeniería de software, las consultas SQL complejas, son fundamentales para implementar funcionalidades como reportes analíticos, dashboards en tiempo real y sistemas de recomendaciones. Por ejemplo, plataformas de e-commerce utilizan consultas SQL avanzadas para generar recomendaciones de productos basadas en historiales de compra, análisis de tendencias y segmentación de clientes. Estas consultas frecuentemente involucran múltiples joins, agregaciones complejas y optimizaciones específicas, para manejar millones de registros de manera eficiente.
    
    .row.align-items-center.mb-5
      .col-lg-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema4/11.svg", style="max-width: 90px").mx-auto
      .col-lg
        h2(data-aos="fade-left") Ejercicio práctico
    
    p.mb-5 Crear consultas SQL avanzadas para análisis de ventas en una base de datos de e-commerce. 

    .bg-full-width.bg-fondo-1
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema4/12.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="43%" y="54.5%" numero="+")
                h5 Primero
                p Primero, crear la estructura central de módulos con MóduloCompartido para componentes y directivas comunes, MóduloNúcleo para servicios singleton, y módulos de características separados para Proyectos, Tareas, y Equipos con configuración apropiada de carga diferida. 
    
              .bg-color-white.box-shadow.p-3(x="85%" y="65%" numero="+")
                h5 Segundo
                p Implementar directivas personalizadas como appResaltarVencido para resaltar tareas vencidas, appArrastrarSoltar para implementar funcionalidad de arrastrar y soltar, y appVerificarPermisos para mostrar condicionalmente elementos basados en permisos de usuario.  
    
              .bg-color-white.box-shadow.p-3(x="14%" y="36%" numero="+")
                h5 Tercero
                p Desarrollar directivas estructurales como *appAccesoRol que renderizan condicionalmente contenido basado en roles de usuario, demostrando creación avanzada de directivas con TemplateRef y ViewContainerRef. 
    
              .bg-color-white.box-shadow.p-3(x="24%" y="17.3%" numero="+")
                h5 Cuarto
                p Establecer patrones apropiados de inyección de dependencias utilizando el sistema de inyector jerárquico de Angular para proporcionar servicios específicos de características mientras mantiene servicios globales en alcances apropiados. 
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/13.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 <b>Resultado</b>. Se obtienen consultas complejas que demuestran técnicas avanzadas de SQL para análisis de negocio y reporting.
    
    #t_4_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.3] Bases de datos NoSQL: introducción a MongoDB y sus características
    
    p.mb-5 La comprensión de las bases de datos NoSQL es clave para el desarrollo de aplicaciones que manejan grandes volúmenes de datos no estructurados o con esquemas cambiantes.
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.text-white
            h2.mb-4(data-aos="flip-up") Bases de datos NoSQL: introducción a MongoDB y sus características    
            p.mb-4(data-aos="fade-right") En el PDF <b>Bases de datos NoSQL</b>, se aborda el funcionamiento de MongoDB como una herramienta fundamental para diseñar soluciones flexibles y escalables. A través de ejemplos prácticos, se exploran sus características principales, como la organización por documentos, la flexibilidad de esquemas, la capacidad de replicación y agregación, y su aplicación en contextos donde las bases de datos tradicionales resultan limitadas frente a los requerimientos dinámicos del entorno actual.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_8.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Bases de datos NoSQL: introducción a MongoDB y sus características   
    
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/14.png', alt='')
    
    #t_4_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.4] Comparación entre bases de datos relacionales y NoSQL: elección, según el caso de uso
    
    p.mb-5 La elección entre bases de datos relacionales y NoSQL representa una decisión arquitectónica fundamental que impacta directamente en el rendimiento, escalabilidad, consistencia y complejidad de mantenimiento de las aplicaciones web. 

    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Bases de datos relacionales" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Bases de datos relacionales
            p Son excelentes en escenarios que requieren transacciones ACID estrictas, consultas complejas con múltiples joins, integridad referencial rigurosa y casos de uso donde la estructura de datos es estable y bien definida.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/15.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Bases de datos NOSQL" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Bases de datos NOSQL
            p Son superiores para aplicaciones que necesitan escalamiento horizontal masivo, flexibilidad de esquema, manejo de datos semi-estructurados o no estructurados, y desarrollo ágil con requisitos evolutivos.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/16.png', alt='')
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/17.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-2.p-5(data-aos="fade-left")
          p.mb-0 El teorema CAP (Consistency, Availability, Partition tolerance) proporciona un marco teórico para entender las compensaciones inherentes en sistemas distribuidos de bases de datos. Las bases de datos relacionales tradicionalmente priorizan consistencia y disponibilidad, mientras que los sistemas NoSQL frecuentemente optimizan para disponibilidad y tolerancia a particiones, sacrificando consistencia inmediata en favor de consistencia eventual. Factores adicionales incluyen la complejidad de las consultas requeridas, patrones de acceso a datos (lectura vs. escritura intensiva), requisitos de escalabilidad, experiencia del equipo de desarrollo y restricciones presupuestarias. Vara Mesa et al. (2015), enfatizan que la selección de tecnologías de base de datos debe alinearse con los objetivos de negocio y los requisitos técnicos específicos de cada proyecto.
    
    .bg-full-width.bg-color-9.mb-5
      .p-4.p-md-5
        p.mb-5 En la práctica profesional de la ingeniería de software, muchas organizaciones adoptan enfoques híbridos (polyglot persistence) utilizando diferentes tipos de bases de datos para diferentes componentes de sus aplicaciones. Por ejemplo, Netflix utiliza Cassandra para datos de viewing history debido a sus requisitos de escritura masiva, MySQL para datos de facturación por su necesidad de consistencia transaccional, y Elasticsearch para búsquedas y analíticas. Esta aproximación permite optimizar cada componente, según sus requisitos específicos mientras mantiene la flexibilidad arquitectónica.
        .row.align-items-center.mb-5
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema4/11.svg", style="max-width: 90px").mx-auto
          .col-lg
            h2(data-aos="fade-left") Ejercicio práctico
        
        p.mb-5 Implementar el mismo caso de uso (sistema de e-commerce) en ambos paradigmas y analizar diferencias.  
        
        .row.justify-content-center
          .col-lg-10
            PasosA.color-primario.mb-5(tipo="n")
              .row.justify-content-center
                .col-lg-11.mb-4.mb-lg-0
                  h3 Paso 1
                  p Implementación relacional (PostgreSQL):  
                  div.git-command-block.text-white
                    p.mb-0 CREATE TABLE ordenes (id SERIAL PRIMARY KEY, cliente_id INT, fecha DATE, total DECIMAL); CREATE TABLE orden_items (orden_id INT, producto_id INT, cantidad INT, precio DECIMAL, PRIMARY KEY (orden_id, producto_id)); CREATE TABLE productos (id SERIAL PRIMARY KEY, nombre VARCHAR(100), stock INT);.
              .row.justify-content-center
                .col-lg-11.mb-4.mb-lg-0.order-2
                  h3 Paso 2
                  p Implementación NoSQL (MongoDB): 
                  div.git-command-block.text-white
                    p.mb-0 // Documento de orden embedido: {_id: ObjectId(), cliente_id: 123, fecha: ISODate(), items: [{producto_id: 456, nombre: 'Laptop', cantidad: 1, precio: 1500}], total: 1500, estado: 'pendiente'}.
              .row.justify-content-center
                .col-lg-11.mb-4.mb-lg-0.order-2
                  h3 Paso 3
                  p Comparar consultas: SQL: 
                  div.git-command-block.text-white
                    p.mb-0 SELECT p.nombre, SUM(oi.cantidad) FROM orden_items oi JOIN productos p ON oi.producto_id = p.id GROUP BY p.id; vs MongoDB: db.ordenes.aggregate([{$unwind: '$items'}, {$group: {_id: '$items.producto_id', total_vendido: {$sum: '$items.cantidad'}}}]).
              .row.justify-content-center
                .col-lg-9.mb-4.mb-lg-0.order-2
                  h3 Paso 4
                  p Analizar performance y escalabilidad.
                .col-md-4.col-lg-2.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema4/18.svg', alt='Texto que describa la imagen')
              .row.justify-content-center
                .col-lg-9.mb-4.mb-lg-0
                  h3 Resultado
                  p Se obtiene una comparación práctica que demuestra las ventajas y desventajas de cada enfoque, incluyendo facilidad de consultas, escalabilidad y mantenimiento.
                .col-md-4.col-lg-2.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema4/19.svg', alt='Texto que describa la imagen')

    #t_4_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.5] Interacción con bases de datos en aplicaciones web: uso de ORMs y drivers
    
    p.mb-5 La conexión efectiva entre aplicaciones web y bases de datos es esencial para garantizar el almacenamiento, consulta y manipulación eficiente de la información.
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.text-white.order-2
            h2.mb-4(data-aos="flip-up") Interacción con bases de datos en aplicaciones web: uso de ORMs y drivers    
            p.mb-4(data-aos="fade-right") En el PDF <b>Interacción con bases de datos en aplicaciones web</b>, se exploran las ventajas y desafíos del uso de ORMs y drivers nativos, dos enfoques ampliamente utilizados para gestionar el acceso a datos. A través de ejemplos prácticos, se analizan criterios como la facilidad de implementación, la optimización del rendimiento y la adaptabilidad a distintos contextos de desarrollo, brindando herramientas para tomar decisiones fundamentadas en proyectos reales.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_9.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Interacción con bases de datos en aplicaciones web: uso de ORMs y drivers   
    
          .col-lg-4.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/20.png', alt='')

    .row.align-items-center.mb-5
      .col-lg-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema4/21.svg", style="max-width: 90px").mx-auto
      .col-lg
        h2(data-aos="fade-left") Reflexión final
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/22.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") El dominio de las tecnologías back-end y sistemas de bases de datos, constituye una competencia fundamental para cualquier ingeniero de software que aspire a desarrollar aplicaciones web robustas, escalables y mantenibles en el entorno profesional actual. 
        p A lo largo de esta unidad, se han explorado las tecnologías del lado del servidor, desde Node.js con su modelo asíncrono revolucionario hasta Python con sus frameworks especializados, cada una, ofreciendo enfoques únicos para resolver desafíos complejos del desarrollo web moderno. La comprensión profunda de estas tecnologías permite a los profesionales tomar decisiones arquitectónicas informadas que impacten directamente en el éxito de los proyectos empresariales.

    
        .bg-color-6.p-5.mb-3(data-aos="fade-left")
          p.mb-0 La configuración y administración de servidores web representa una habilidad crítica que trasciende el simple conocimiento técnico, requiriendo una mentalidad sistemática que considere aspectos de seguridad, escalabilidad y mantenibilidad desde las fases iniciales del desarrollo. 
        p Las competencias adquiridas en el manejo de middleware, enrutamiento, despliegue en múltiples plataformas cloud e implementación de medidas de seguridad básicas preparan a los ingenieros para enfrentar los desafíos reales del entorno productivo, donde la estabilidad y seguridad de las aplicaciones determinan el éxito empresarial. Esta formación integral en configuración de servidores proporciona la base necesaria para evolucionar hacia roles de arquitectura de software y DevOps.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/23.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") El conocimiento integral de bases de datos relacionales y NoSQL, junto con las estrategias de integración mediante ORMs y drivers especializados, equipa a los profesionales con las herramientas necesarias para diseñar arquitecturas de datos eficientes que soporten los requisitos de negocio más exigentes. 
    
        .bg-color-5.mb-3.p-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/24.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En un mercado laboral donde la gestión eficiente de datos constituye una ventaja competitiva fundamental, los ingenieros que dominan estas tecnologías pueden contribuir significativamente al desarrollo de soluciones innovadoras, desde sistemas de e-commerce que manejan millones de transacciones hasta plataformas de analíticas en tiempo real que procesan terabytes de información. 
        p Esta formación técnica sólida, combinada con una comprensión profunda de los trade-offs arquitectónicos, posiciona a los graduados para liderar proyectos tecnológicos complejos y adaptarse continuamente a las tecnologías emergentes en el ecosistema del desarrollo web.





    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

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
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: '¿Qué es Node.js?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Una librería de CSS',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Un framework de diseño',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Un entorno para ejecutar JavaScript en el servidor',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Un lenguaje de marcas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Correcto: Node.js permite ejecutar código JavaScript fuera del navegador, en el servidor.',
            mensaje_incorrecto:
              'Incorrecto: Node.js no es un lenguaje, es un entorno de ejecución.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de los siguientes lenguajes se usa en el back-end (servidor)?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'HTML',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'CSS',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Python',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'JSON',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Correcto: Python es ampliamente usado en servidores, APIs y aplicaciones web.',
            mensaje_incorrecto:
              'Incorrecto: HTML y CSS son front-end, y JSON es un formato de datos.',
          },
          {
            id: 3,
            texto: '¿Qué hace un servidor web?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Edita archivos HTML',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Agrega estilos visuales',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Procesa solicitudes y entrega contenido al navegador',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Ejecuta hojas de estilo',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Correcto: El servidor recibe solicitudes (como URL) y responde con datos o archivos.',
            mensaje_incorrecto:
              'Incorrecto: Las tareas de edición y estilo se hacen del lado del cliente.',
          },
          {
            id: 4,
            texto:
              '¿Qué tipo de base de datos se organiza por tablas y relaciones?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'NoSQL',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Relacional',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Blockchain',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Orientada a objetos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Correcto: Las bases de datos relacionales (como MySQL, PostgreSQL) organizan la información en tablas con claves y relaciones.',
            mensaje_incorrecto:
              'Incorrecto: NoSQL y otras estructuras no se organizan por relaciones estrictas.',
          },
          {
            id: 5,
            texto: '¿Qué ventaja ofrecen las bases de datos NoSQL?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Requieren estructura fija',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Manejan datos no estructurados con esquemas flexibles',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Solo sirven para pequeñas aplicaciones',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Solo funcionan con HTML',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Correcto: NoSQL es ideal para datos distribuidos, flexibles y no estructurados (como JSON).',
            mensaje_incorrecto:
              'Incorrecto: Su fortaleza está en la flexibilidad y escalabilidad, no en el uso exclusivo con lenguajes como HTML',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
