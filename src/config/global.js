export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Back-end y bases de datos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Introducción ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tecnologías del lado del servidor (Node.js, Python)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Node.js y su funcionamiento: V8 engine y ejecución en el servidor',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Express.js: Framework minimalista para crear servidores web',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Python y frameworks backend: Flask y Django',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'Uso de Node.js y Python en el desarrollo de APIs: creación de APIs RESTful',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo:
              'Manejo de procesos asíncronos en Node.js: Promesas y callbacks',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Configuración de servidores',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Configuración de servidores con Node.js: Creación y despliegue de servidores web',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Manejo de rutas y middleware en Express.js: Enrutamiento y gestión de solicitudes',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Despliegue de aplicaciones web: Heroku, AWS, y DigitalOcean',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo:
              'Configuración de servidores de base de datos: MySQL, PostgreSQL, MongoDB',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo:
              'Seguridad básica en servidores: protección contra ataques comunes (XSS, CSRF)',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Bases de datos relacionales y NoSQL',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Bases de datos relacionales: uso de MySQL y PostgreSQL',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo:
              'Consultas SQL: lenguaje SQL para consultas y manipulación de datos',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo:
              'Bases de datos NoSQL: introducción a MongoDB y sus características',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo:
              'Comparación entre bases de datos relacionales y NoSQL: elección, según el caso de uso',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo:
              'Interacción con bases de datos en aplicaciones web: uso de ORMs y drivers',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Contreras Castañeda, M. Á. (2016). Desarrollo de aplicaciones web multiplataforma: ( ed.). Ministerio de Educación y Formación Profesional de España. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/101940?page=1',
    },
    {
      referencia:
        'Granados La Paz, R. L. (2023). Desarrollo de aplicaciones web en el entorno servidor. IFCD0210: (1 ed.). IC Editorial. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/249857?page=1',
    },
    {
      referencia:
        'Cardador Cabello, A. L. (2015). Desarrollo de aplicaciones web distribuidas (UF1846): ( ed.). IC Editorial. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/44134?page=1',
    },
    {
      referencia:
        'Contreras Castañeda, M. Á. (2016). Desarrollo de aplicaciones web multiplataforma: ( ed.). Ministerio de Educación y Formación Profesional de España. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/101940?page=1',
    },
    {
      referencia:
        'Cardador Cabello, A. L. (2015). Desarrollo de aplicaciones web distribuidas (UF1846): ( ed.). IC Editorial. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/44134?page=1',
    },
    {
      referencia:
        'Contreras Castañeda, M. Á. (2016). Desarrollo de aplicaciones web multiplataforma: ( ed.). Ministerio de Educación y Formación Profesional de España. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/101940?page=1',
    },
  ],
  glosario: [
    {
      termino: 'ACID',
      significado:
        'Propiedades fundamentales que garantizan la confiabilidad de las transacciones en bases de datos relacionales, representando Atomicidad (la transacción se ejecuta completamente o no se ejecuta), Consistencia (la base de datos permanece en un estado válido), Aislamiento (las transacciones concurrentes no interfieren entre sí) y Durabilidad (los cambios confirmados persisten permanentemente).',
    },
    {
      termino: 'API (<em>Application Programming Interface</em>)',
      significado:
        'Conjunto de protocolos, rutinas y herramientas que permite la comunicación entre diferentes componentes de software, definiendo cómo las aplicaciones pueden solicitar servicios de otras aplicaciones, bibliotecas o sistemas operativos de manera estandarizada.',
    },
    {
      termino: 'AWS (<em>Amazon Web Services</em>) ',
      significado:
        'Plataforma de servicios de computación en la nube ofrecida por Amazon que proporciona una amplia gama de servicios de infraestructura como servicio (IaaS) y plataforma como servicio (PaaS), incluyendo almacenamiento, bases de datos, análisis y herramientas de desarrollo.',
    },
    {
      termino: '<em>Backend</em>',
      significado:
        'Parte del desarrollo de software que se ejecuta del lado del servidor y no es directamente accesible por los usuarios finales, encargándose de la lógica de negocio, procesamiento de datos, autenticación, autorización y comunicación con bases de datos.',
    },
    {
      termino: 'BSON (<em>Binary JSON</em>) ',
      significado:
        'Formato de codificación binaria utilizado por MongoDB para almacenar documentos y realizar consultas de datos, que extiende el modelo JSON agregando tipos de datos adicionales como fechas y datos binarios, optimizando el almacenamiento y la velocidad de consulta.',
    },
    {
      termino: '<em>Callback</em>',
      significado:
        'Función que se pasa como argumento a otra función para ser ejecutada en un momento posterior, típicamente utilizada en programación asíncrona para manejar operaciones que no bloquean el hilo principal de ejecución, como solicitudes de red o acceso a archivos.',
    },
    {
      termino: 'CAP (<em>Consistency, Availability, Partition tolerance</em>)',
      significado:
        ' Teorema fundamental en sistemas distribuidos que establece que es imposible garantizar simultáneamente consistencia total, disponibilidad completa y tolerancia a particiones de red, obligando a los diseñadores de sistemas a priorizar dos de estas tres propiedades.',
    },
    {
      termino: 'CORS (<em>Cross-Origin Resource Sharing</em>)',
      significado:
        'Mecanismo de seguridad implementado por navegadores web que permite o restringe que una página web acceda a recursos de un dominio diferente al que sirve la página, controlando las solicitudes HTTP entre diferentes orígenes mediante headers específicos.',
    },
    {
      termino: 'CSP (<em>Content Security Policy</em>)',
      significado:
        'Estándar de seguridad web que ayuda a prevenir ataques de cross-site scripting (XSS) y otros ataques de inyección de código, permitiendo a los administradores web definir qué fuentes de contenido son consideradas válidas para cargar en una página web. ',
    },
    {
      termino: 'CSRF (<em>Cross-Site Request Forgery</em>)',
      significado:
        'Tipo de ataque de seguridad web donde un sitio malicioso engaña al navegador de un usuario autenticado para que ejecute acciones no deseadas en un sitio web de confianza, aprovechando las credenciales de sesión almacenadas en el navegador. ',
    },
    {
      termino: 'CTE (<em>Common Table Expression</em>)',
      significado:
        'Construcción SQL que permite definir un conjunto de resultados temporales y con nombre que puede ser referenciado dentro del contexto de una consulta SELECT, INSERT, UPDATE o DELETE, facilitando la escritura de consultas complejas y mejorando la legibilidad del código.',
    },
    {
      termino: 'DCL (<em>Data Control Language</em>)',
      significado:
        'Subconjunto del lenguaje SQL utilizado para controlar el acceso a los datos en una base de datos, incluyendo comandos como GRANT y REVOKE que permiten otorgar y revocar permisos específicos a usuarios y roles sobre objetos de la base de datos.',
    },
    {
      termino: 'DDL (<em>Data Definition Language</em>)',
      significado:
        'Subconjunto del lenguaje SQL utilizado para definir y modificar la estructura de objetos en una base de datos, incluyendo comandos como CREATE, ALTER y DROP para gestionar tablas, índices, vistas y otros elementos del esquema de base de datos.',
    },
    {
      termino: 'DigitalOcean',
      significado:
        'Proveedor de servicios de infraestructura en la nube que se especializa en ofrecer servidores virtuales privados (droplets) y servicios relacionados, posicionándose como una alternativa simplificada y económica a proveedores más complejos como AWS, dirigido principalmente a desarrolladores y pequeñas empresas.',
    },
    {
      termino: 'Django',
      significado:
        'Framework web de alto nivel para Python que sigue el patrón arquitectónico Model-View-Template (MVT) y adopta la filosofía "batteries included", proporcionando un conjunto completo de herramientas integradas para desarrollo rápido de aplicaciones web, incluyendo ORM, sistema de autenticación y panel de administración automático.',
    },
    {
      termino: 'DML (<em>Data Manipulation Language</em>)',
      significado:
        'Subconjunto del lenguaje SQL utilizado para insertar, actualizar, eliminar y recuperar datos en una base de datos, incluyendo comandos fundamentales como INSERT, UPDATE, DELETE y SELECT que permiten manipular el contenido de las tablas.',
    },
    {
      termino: 'DQL (<em>Data Query Language</em>)',
      significado:
        'Subconjunto del lenguaje SQL específicamente enfocado en la consulta y recuperación de datos de una base de datos, principalmente representado por el comando SELECT y sus diversas cláusulas como WHERE, GROUP BY, HAVING y ORDER BY.',
    },
    {
      termino: 'Express.js',
      significado:
        'Framework web minimalista y flexible para Node.js que proporciona un conjunto robusto de características para aplicaciones web y móviles, facilitando la creación de servidores HTTP y APIs RESTful mediante un sistema intuitivo de rutas y middleware.',
    },
    {
      termino: 'Flask',
      significado:
        'Microframework web para Python basado en Werkzeug y Jinja2 que adopta un enfoque minimalista, proporcionando solo los componentes esenciales para construir aplicaciones web y permitiendo a los desarrolladores elegir y configurar las herramientas adicionales según sus necesidades específicas.',
    },
    {
      termino: 'Frontend',
      significado:
        'Parte del desarrollo de software que se ejecuta del lado del cliente (navegador web) y es directamente visible e interactiva para los usuarios finales, incluyendo la interfaz de usuario, diseño visual y lógica de presentación de las aplicaciones web.',
    },
    {
      termino: 'Heroku',
      significado:
        'Plataforma como servicio (PaaS) en la nube que permite a los desarrolladores construir, entregar, monitorear y escalar aplicaciones web sin preocuparse por la infraestructura subyacente, soportando múltiples lenguajes de programación y proporcionando herramientas integradas para el despliegue automatizado.',
    },
    {
      termino: 'HTTP (<em>HyperText Transfer Protocol</em>) ',
      significado:
        ' Protocolo de comunicación utilizado para la transferencia de información en la World Wide Web, definiendo cómo los clientes (navegadores) y servidores intercambian solicitudes y respuestas, incluyendo métodos como GET, POST, PUT y DELETE.',
    },
    {
      termino: 'HTTPS (<em>HyperText Transfer Protocol Secure</em>)',
      significado:
        ' Versión segura del protocolo HTTP que utiliza cifrado SSL/TLS para proteger la comunicación entre clientes y servidores web, garantizando la confidencialidad, integridad y autenticación de los datos transmitidos.',
    },
    {
      termino: 'IaaS (<em>Infrastructure as a Service</em>)',
      significado:
        'Modelo de servicio de computación en la nube que proporciona recursos de infraestructura virtualizados a través de internet, incluyendo servidores virtuales, almacenamiento, redes y sistemas operativos, permitiendo a los usuarios tener control total sobre la configuración del sistema.',
    },
    {
      termino: 'JSON (<em>JavaScript Object Notation</em>)',
      significado:
        'Formato ligero de intercambio de datos basado en texto que es fácil de leer y escribir para humanos y fácil de parsear y generar para máquinas, ampliamente utilizado en aplicaciones web para transmitir datos entre servidores y aplicaciones web. ',
    },
    {
      termino: 'Middleware',
      significado:
        'Software que actúa como intermediario entre diferentes aplicaciones o componentes de software, proporcionando servicios comunes y funcionalidades como comunicación, gestión de datos, autenticación, logging y manejo de errores de manera centralizada y reutilizable.',
    },
    {
      termino: 'MongoDB',
      significado:
        'Sistema de gestión de base de datos NoSQL orientado a documentos que almacena datos en formato BSON, ofreciendo escalabilidad horizontal, esquemas flexibles y capacidades de consulta avanzadas, diseñado especialmente para aplicaciones modernas que requieren manejo de grandes volúmenes de datos semi-estructurados.',
    },
    {
      termino: 'MySQL',
      significado:
        'Sistema de gestión de base de datos relacional de código abierto que utiliza el lenguaje SQL para acceder y manipular datos, conocido por su velocidad, confiabilidad y facilidad de uso, ampliamente adoptado en aplicaciones web y desarrollos empresariales.',
    },
    {
      termino: 'Node.js',
      significado:
        'Entorno de ejecución de JavaScript construido sobre el motor V8 de Chrome que permite ejecutar código JavaScript del lado del servidor, caracterizado por su modelo de eventos no bloqueante y su arquitectura orientada a eventos que optimiza el rendimiento para aplicaciones de red intensivas.',
    },
    {
      termino: 'NoSQL',
      significado:
        'Categoría de sistemas de gestión de bases de datos que proporciona un mecanismo para almacenamiento y recuperación de datos que no utiliza el modelo relacional tabular tradicional, incluyendo bases de datos de documentos, clave-valor, columnas anchas y grafos, diseñadas para escalabilidad horizontal y flexibilidad de esquema.',
    },
    {
      termino: 'ORM (<em>Object-Relational Mapping</em>)',
      significado:
        'Técnica de programación que permite mapear objetos de un lenguaje de programación orientado a objetos con datos almacenados en una base de datos relacional, proporcionando una capa de abstracción que facilita el acceso y manipulación de datos sin escribir SQL directamente.',
    },
    {
      termino: 'PaaS (<em>Platform as a Service</em>) ',
      significado:
        'Modelo de servicio de computación en la nube que proporciona una plataforma completa de desarrollo y despliegue de aplicaciones, incluyendo el sistema operativo, middleware, herramientas de desarrollo y servicios de base de datos, permitiendo a los desarrolladores enfocarse en el código sin gestionar la infraestructura.',
    },
    {
      termino: 'PostgreSQL',
      significado:
        'Sistema de gestión de base de datos relacional y orientado a objetos de código abierto que destaca por su cumplimiento con estándares SQL, características avanzadas como tipos de datos personalizados, herencia de tablas y capacidades de programación procedural sofisticadas.',
    },
    {
      termino: 'Promesa (<em>Promise</em>) ',
      significado:
        'Objeto en JavaScript que representa la eventual finalización o falla de una operación asíncrona, proporcionando una interfaz más limpia y mantenible para manejar código asíncrono comparado con callbacks tradicionales, con métodos como then(), catch() y finally().',
    },
    {
      termino: 'REST (<em>Representational State Transfer</em>) ',
      significado:
        'Estilo arquitectónico para sistemas distribuidos, especialmente servicios web, que utiliza los métodos estándar HTTP (GET, POST, PUT, DELETE) para realizar operaciones sobre recursos identificados por URLs, promoviendo la escalabilidad, simplicidad e interoperabilidad entre sistemas. ',
    },
    {
      termino: 'RESTful',
      significado:
        'Adjetivo que describe servicios web o APIs que implementan y siguen los principios y restricciones del estilo arquitectónico REST, caracterizados por ser stateless, utilizar métodos HTTP estándar y proporcionar una interfaz uniforme para la interacción con recursos.',
    },
    {
      termino: '<em>Sharding</em>',
      significado:
        'Técnica de particionamiento horizontal de bases de datos que distribuye datos a través de múltiples servidores o instancias de base de datos, permitiendo que sistemas de bases de datos escalen horizontalmente para manejar grandes volúmenes de datos y altas cargas de trabajo.',
    },
    {
      termino: 'SQL (<em>Structured Query Language</em>)',
      significado:
        ' Lenguaje de programación estándar diseñado para gestionar y manipular bases de datos relacionales, proporcionando comandos para definir estructuras de datos, insertar y actualizar datos, realizar consultas complejas y controlar el acceso a la información.',
    },
    {
      termino: 'V8',
      significado:
        'Motor de JavaScript de código abierto desarrollado por Google que compila JavaScript directamente a código máquina nativo, utilizado en el navegador Chrome y como base para Node.js, conocido por su alta performance y optimizaciones avanzadas de ejecución.',
    },
    {
      termino: 'XSS (<em>Cross-Site Scripting</em>) ',
      significado:
        'Tipo de vulnerabilidad de seguridad web que permite a atacantes inyectar scripts maliciosos en páginas web visualizadas por otros usuarios, potencialmente permitiendo el robo de información sensible, sesiones de usuario o la ejecución de acciones no autorizadas en nombre del usuario.',
    },
  ],
}
